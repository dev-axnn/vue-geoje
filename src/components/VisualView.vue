<template>
  <!-- 비주얼 영역 -->
  <section class="visual">
    <!-- Swiper -->
    <Swiper
      :modules="modules"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :speed=1500
      :loop="true"
      :pagination="{
        el: '.sw-visual-pg',
        clickable: 'true'
      }"
      :effect="'fade'"
      @swiper="visualSlide"
      class="sw-visual">
      <SwiperSlide class="swiper-slide" v-for="(item, index) in visualData" :key="index">
        <a :href="item.link" :style="{
            backgroundImage:`url(${ resW ? item.imgurl : item.mbimgurl })`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          }"
          :data-bg-mb="item.mbimgurl"
          :data-bg="item.imgurl"
        ></a>
      </SwiperSlide>

      <!-- 슬라이더 페이지네이션 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pg"></div>
        <button class="sw-visual-bt">
          <span class="material-icons-outlined" @click="controlSlide">
            <!-- 클릭을 했을 때 아이콘 모양을 바꾸기 위해서 작성 (구글 아이콘일 때만 해당) -->
            {{slideState}}
          </span>
        </button>
      </div>
    </Swiper>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { Pagination, Autoplay, EffectFade } from 'swiper';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  import { onMounted, computed, ref } from 'vue';
  import { useStore } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },

    setup(){
      const store = useStore();
      const visualData = computed(() => store.getters.visualData)

      const slide = ref(null);
      const visualSlide = (swiper) => {
        slide.value = swiper;
        
        // 1번부터 실행
        slide.value.slideTo(1);
      }
      const slideState = ref('pause');
      const controlSlide = () => {
        if(slide.value.autoplay.running){
          slide.value.autoplay.stop();
          slideState.value = 'play_arrow';
        }else{
          slide.value.autoplay.start();
          slideState.value = 'pause';
        }
      }

      // 현재 1400보다 크면 true, 작으면 false
      const resW = ref(true);

      onMounted( () => {
        const checkWin = () => {
          let w = window.innerWidth;
          if(w <= 1400) {
            resW.value = false;            
          }else{
            resW.value = true;            
          }
        }
        window.addEventListener('resize', checkWin);

        // 최초 한 번 실행
        checkWin();
      })


      return{
        modules: [ Pagination, Autoplay, EffectFade ],
        visualSlide,
        controlSlide,
        slideState,
        visualData,
        resW
      }
    }
  }
</script>

<style>
  /* 비주얼 영역 */
  .visual {
    position: relative;
    display: block;
    height: 477px;
  }

  .sw-visual {
    width: 100%;
    height: 100%;
  }

  .sw-visual a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;

    display: block;
    z-index: 9;
  }

  .sw-visual-pg .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 0.5;
    margin-right: 10px;
  }

  .sw-visual-pg {
    display: inline-block;
    width: auto !important;
  }

  .sw-visual-pg .swiper-pagination-bullet-active {
    opacity: 1.0;
  }

  .sw-visual-bt {
    position: relative;
    display: inline-block;
    width: 23px;
    height: 22px;
    background: transparent;
    vertical-align: bottom;

    cursor: pointer;
    border: 0;

    font-family: 'Material Icons';
    color: #fff;
    font-size: 10px;
  }

  .sw-visual-bt-play {
    background: url('@/assets/images/play.png') no-repeat center;
  }

  /* visual PC 버전 */
  /* visual 반응형 버전 */
  @media all and (max-width: 1400px) {
    .visual {
      height: 55vw;
    }

    .vs-1 {
      background: url('@/assets/images/bannerm_1_20200915_0.jpg') no-repeat center;
      background-size: cover;
    }
    
    .vs-2 {
      background: url('@/assets/images/bannerm_2_20200915_0.jpg') no-repeat center;
      background-size: cover;
    }
    
    .vs-3 {
      background: url('@/assets/images/bannerm_4_20200915_0.jpg') no-repeat center;
      background-size: cover;
    }

    .sw-visual-control {
      bottom: 40px;
    }
  }

  @media all and (max-width: 1000px) {
    .visual {
      padding-top: 70px;
      height: 70vw;
    }

    .sw-visual-control {
      bottom: 30px;
    }
  }
</style>
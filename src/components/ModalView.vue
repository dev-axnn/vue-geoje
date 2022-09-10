<template>
  <!-- Modal Popup -->
  <div class="modal-wrap">
    <div class="modal-main">
      <span class="modal-logo"></span>
      <p class="modal-notice">
        해당 사이트는 <strong>스터디용</strong>으로 제작되었으며,<br/>
        리소스는 <strong>원저작자</strong>에게 있음을 알려드립니다.<br/>
        문제사항이 있을 시 연락주시면 빠른 시일 내 조치하겠습니다.<br/>
        <span>본 사이트는 Chrome 에 최적화되어 있습니다.</span>
      </p>
      <div class="modal-corrections">
        <strong>아래 내용을 수정 및 보충하였습니다.</strong>
        <ul class="clearfix">
          <li class="corrections-number">(1)</li>
          <li class="corrections-txt">Visual 영역의 반응형 모션을 더 자연스럽게 바꾸었습니다.</li>
        </ul>
        <ul class="clearfix">
          <li class="corrections-number">(2)</li>
          <li class="corrections-txt">Visual 영역 반응형 중 이미지가 이중으로 보이는 이슈를 해결하였습니다.</li>
        </ul>
        <ul class="clearfix">
          <li class="corrections-number">(3)</li>
          <li class="corrections-txt">보이지않는 영상을 다른 영상으로 교체하여 사용자의 불편함을 해소하였습니다.</li>
        </ul>
      </div>
      <div class="modal-close">
        확인했습니다. <i>( Enter 하여 닫기 )</i>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted } from '@vue/runtime-core';
  import $ from 'jquery';

  export default {
    setup(){
      onMounted(() => {
        let modalWrap = $('.modal-wrap');
        let modalClose = $('.modal-close');
        // click() 을 이용해서 hide() 해보자!
        modalClose.click(function(){
          // modalWrap.hide();
          modalWrap.stop().fadeOut(300);
          $('html').css('overflow', 'auto');
        });
        $('html').keydown(function (key) {
          if (key.keyCode == 13) {
            modalWrap.stop().fadeOut(200);
            $('html').css('overflow', 'auto');
          }
        });
        let modalMain = $('.modal-main');
        modalMain.click(function (event) {
          event.stopPropagation();
        });
        modalWrap.click(function () {
          modalWrap.stop().fadeOut(200);
          $('html').css('overflow', 'auto');
        });
      });

      return{}
    }
  }
</script>

<style scoped>
  /* Modal Popup */
.modal-wrap {
  font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
}

.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  border-radius: 20px;
  background: #fff;
}

.modal-logo {
  position: absolute;
  left: 50%;
  top: -8%;
  transform: translateX(-50%);
  width: 86px;
  height: 86px;
  border-radius: 43px;
  border: 4px solid #fff;
  background: #00b7ff url('@/assets/images/ahn-symbol_300x300_white.png') no-repeat center;
  background-size: 60%;
}

.modal-notice {
  padding: 73px 30px 23px 30px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  letter-spacing: -1.2px;
}

.modal-notice strong {
  color: #ec3f87;
}

.modal-notice span {
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  letter-spacing: -0.8px;
}

.modal-corrections::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: #f7f7f7;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

.modal-corrections::-webkit-scrollbar-thumb {
  background-color: #aaa;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.modal-corrections {
  width: 440px;
  height: 135px;
  font-size: 13px;
  line-height: 20px;
  overflow: auto;
  background: #eee;
  margin: 0 auto;
  padding: 15px 20px;
  letter-spacing: -0.8px;
}

.modal-corrections strong {
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
  line-height: 30px;
}

.corrections-number {
  float: left;
  width: 6%;
}

.corrections-txt {
  float: right;
  width: 94%;
}

.modal-close {
  position: absolute;
  left: 50%;
  bottom: -1px;
  transform: translateX(-50%);
  width: 502px;
  height: 45px;
  border-radius: 0 0 19px 19px;
  
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  color: #fff;

  cursor: pointer;
  background: #00b7ff;
}

.modal-close i {
  margin-left: 3px;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
}
/* /Modal Popup */
</style>
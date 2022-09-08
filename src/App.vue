<template>
  <div>
    <modal-view-v></modal-view-v>
    <more-wrap-v></more-wrap-v>
    <mb-button-v></mb-button-v>
    <mb-menu-v></mb-menu-v>

    <div class="wrap">
      <header-v></header-v>
      <visual-v></visual-v>
      <quick-menu-v></quick-menu-v>
      <community-v></community-v>
      <gallery-v></gallery-v>
      <banner-v></banner-v>
      <footer-v></footer-v>
    </div>
  </div>
</template>

<script>
  import ModalViewV from './components/ModalView.vue';
  import MoreWrapV from '@/components/MoreWrapView.vue';
  import MbButtonV  from '@/components/MbButtonView.vue';
  import MbMenuV from '@/components/MbMenuView.vue';

  import HeaderV from '@/components/HeaderView.vue';
  import VisualV from '@/components/VisualView.vue';
  import QuickMenuV from '@/components/QuickMenuView.vue';
  import CommunityV from '@/components/CommunityView.vue';
  import GalleryV from '@/components/GalleryView.vue';
  import BannerV from '@/components/BannerView.vue';
  import FooterV from '@/components/FooterView.vue';

  import { useStore } from 'vuex';

  export default {
    name: 'App',
    components: {
      ModalViewV,
      MoreWrapV,
      MbButtonV,
      MbMenuV,
      HeaderV,
      VisualV,
      QuickMenuV,
      CommunityV,
      GalleryV,
      BannerV,
      FooterV
    },
    setup(){
      const store = useStore();
      store.dispatch('fetchGetMenu');
      store.dispatch('fetchGetVisual');
      store.dispatch('fetchComuInfo');
      store.dispatch('fetchComuNews');
      store.dispatch('fetchGallery');
      store.dispatch('fetchGetMovie');
      store.dispatch('fetchGetBanner');
      return{}
    }
  }
</script>

<style>
  @charset 'utf-8';
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }


  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #f7f7f7;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }

  /* 위쪽은 기본작업입니다. */

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', GmarketSansMedium, GmarketSansLight, GmarketSansBold, '맑은 고딕', '돋움', Dotum, '굴림', Gulim, Sans-serif;
    font-size: 12px;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  /* 공통요소(재사용할 내용) */

  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 1400px;
  }
</style>
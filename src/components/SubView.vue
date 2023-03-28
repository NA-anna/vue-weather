<template>
    <div class="rightContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>서울</p>
                <p>현대시각</p>
            </div>
        </div>
        <div id="contentsBox">
            <div class="buttonBox">
                <div class="buttonBackground">
                    <button class="forecast">Forecast</button>
                    <button class="airquality">Air Quality</button>
                </div>
            </div>
            <div class="weatherBox">
                <div class="airCondition">
                    <p>매우 추움</p>
                </div>
                <div class="detail">
                    <div class="title">
                        <p>🌈상세한 날씨 데이터🌞</p>
                    </div>
                    <div class="data">
                        <div class="dataName">
                            <p></p>
                            <p>후후</p>
                        </div>
                        <div class="dataValue">
                            <p>하하<span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Map />
        <nav>
            <i class="fas fa-home"></i>
            <i class="fas fa-search-location"></i>
            <i class="fas fa-chart-line"></i>
            <i class="fas fa-cog"></i>
        </nav>
    </div>
</template>

<script>
import Map from './Map.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko'); // global로 한국어 locale 사용

export default {
    components: {
        Map,
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/subview.scss';
</style>
<template>
    <div class="leftContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>San Francisco</p>
                <p></p>
            </div>
        </div>
        <div id="contentsBox">
            <div class="buttonBox">
                <div class="buttonBackground">
                    <button class="forecast">forecast</button>
                    <button class="airquality">Air Quality</button>
                </div>
            </div>
            <div class="weatherBox">
                <div class="weatherDegree">
                    <p>10&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="@/assets/images/dust.png" alt="MainLogo"/>
                </div>
                <div class="weatherData">
                    <div v-for="Temporary in TemporaryData" :key="Temporary.title" class="detailData">                                    
                            <p>{{ Temporary.title }}</p>
                            <p>{{ Temporary.value }}</p>
                    </div>
                </div>
            </div>            
        </div>
        <div id="todayWeather">
            <div class="textBox">
                <p>시간대별 날씨 정보</p>
                <p>이번주 날씨 보기</p>
            </div>
            <div class="timelyWeatherBox">
                <div class="timelyWeather">
                    <div class="icon">
                        <img src="@/assets/images/dust.png" alt=""/>
                    </div>
                    <div class="data">
                        <p class="time">2pm</p>
                        <p class="currentDegree">32&deg;</p>
                        <div>
                            <img src="@/assets/images/drop.png" alt=""/>
                            <p class="fall">15%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <i class="fas fa-home"></i>
            <i class="fas fa-search-location"></i>
            <i class="fas fa-chart-line"></i>
            <i class="fas fa-cog"></i>
        </nav>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            //임시데이터
            TemporaryData: [
                {
                    title: "습도",
                    value: "88%",
                },
                {
                    title: "풍속",
                    value: "10m/s",
                },
                {
                    title: "체감온도",
                    value: "WS",
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@import "@/assets/scss/mainview.scss";


</style>


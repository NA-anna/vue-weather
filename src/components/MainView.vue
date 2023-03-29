<template>
    <div class="leftContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>{{ cityName }}</p>
                <p>{{ currentTime }}</p>
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
                    <div v-for="Temporary in temporaryData" :key="Temporary.title" class="detailData">                                    
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
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko'); // global로 한국어 locale 사용

export default {

    data() {
        return {
            // 현재 시간을 나타내기 위한 Dayjs 플러그인 사용
            currentTime: dayjs().format('YYYY. MM. DD. ddd'),

            //상세데이터를 받아주는 데이터 할당
            temp: [],
            icons: [],
            cityName: "",

            //임시데이터
            temporaryData: [
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
    },
    created() {
        // 초기데이터 선언을 위한 코드 작성
        // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        const API_KEY = "f8ad3cf3aa1e0f2df6433c805e65ca58";
        let initialLat = 37.5683;//context.state.position.lat;
        let initialLon = 126.9778;//context.state.position.lon;

        axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`)
        .then(response => {
            console.log(response)
            this.cityName = response.data.timeZone
        })
        .catch(error => 
            console.log(error)
        )
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@import "@/assets/scss/mainview.scss";


</style>


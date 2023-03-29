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
                    <button class="forecast">Forecast</button>
                    <button class="airquality">Air Quality</button>
                </div>
            </div>
            <div class="weatherBox">
                <div class="weatherDegree">
                    <p>{{ currentTemp }}&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="@/assets/images/dust.png" alt="MainLogo"/>
                </div>
                <div class="weatherData">
                    <div v-for="item in currentWeather" :key="item.title" class="detailData">                                    
                            <p>{{ item.title }}</p>
                            <p>{{ item.value }}</p>
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
                <div class="timelyWeather" v-for="(temp, index) in arrayTemps" :key="index">
                    <div class="icon">
                        <img src="@/assets/images/dust.png" alt=""/>
                    </div>
                    <div class="data">
                        <p class="time">{{ Unix_timestamp(temp.dt) }}</p>
                        <p class="currentDegree">{{ Math.round(temp.temp) }}&deg;</p>
                        <div>
                            <img src="@/assets/images/drop.png" alt=""/>
                            <p class="fall">{{ temp.humidity }}</p>
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
            //도시
            cityName: "",

            // 현재 시간을 나타내기 위한 Dayjs 플러그인 사용
            currentTime: dayjs().format('YYYY. MM. DD. ddd'),

            // 현재 온도
            currentTemp: "",

            // 현재 날씨
            currentWeather: [
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
            ],

            //상세데이터를 받아주는 데이터 할당
            arrayTemps: [],
            icons: [],
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
            let initialCityName = response.data.timezone
            this.cityName = initialCityName.split("/")[1]

            let initialCurrentWeatherData = response.data.current
            this.currentTemp = Math.round(initialCurrentWeatherData.temp)
            this.currentWeather[0].value = initialCurrentWeatherData.humidity + "%"
            this.currentWeather[1].value = initialCurrentWeatherData.wind_speed + "m/s"
            this.currentWeather[2].value = initialCurrentWeatherData.feels_like + "도"

            // 시간대별 날씨 데이터 제어
            this.arrayTemps = response.data.hourly

            // 우리는 24시간 이내의 데이터만 활용할 것이기 때문에 for문을 활용한다
            for(let i=0; i<24; i++) {
                this.arrayTemps[i] = response.data.hourly[i]
            }
            console.log(this.arrayTemps)

        })
        .catch(error => 
            console.log(error)
        )
    },
    methods: {
        //타임스탬프로 변환
        Unix_timestamp(dt) {
            let date = new Date(dt * 1000)
            let hour = "0" + date.getHours();
            return hour.substring(2) + "시"
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@import "@/assets/scss/mainview.scss";


</style>


<template>
    <div id="mapContainer">
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted() {
        const API_KEY = 'f743b18ec927badfec1f4a446e0f3155';

        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
            document.head.appendChild(script);
        }
    },
    methods: {

        initMap() {
            // 지도 띄우기
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
                    level: 13, // 지도의 확대 레벨
            };
            var map = new kakao.maps.Map(mapContainer, mapOption);

            // 마커를 생성합니다
            var positions = [
                {
                    latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269),
                },
            ]
            positions.forEach(function(pos) {
                var marker = new kakao.maps.Marker({
                    position: pos.latlng, // 마커의 위치
                })

                //마커가 지도 위에 표시되도록 설정합니다.
                marker.setMap(map)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#mapContainer {
  @include center;
  width: 100%;
  height: 35%;

  #map {
    width: 80%;
    height: 90%;
    border-radius: 10px;
  }
}

</style>

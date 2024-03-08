<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
const router = useRouter();
onBeforeMount(() => {
  router.push("/page-1");
});
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <q-parallax :height="1500" :speed="0.8" src="~assets/cover_2.jpg">
            <div class="head">
              <h1
                class="headText text-white text-center"
                style="font-size: 60px"
              >
                Happy White Valentine
              </h1>
              <h2
                class="headText text-white text-center"
                style="font-size: 45px"
              >
                A gift from cuculala
              </h2>
              <h3
                class="headText text-white text-center"
                style="font-size: 30px"
              >
                14/03/2023
              </h3>
            </div>
            <div class="headLetter q-pa-md" style="margin-top: 400px">
              Hello babibooboo, <br />
              this is my Valentine’s gift for you hehe. <br />
              It took me a lot of time and I worked veri hard to create this. I
              believe you will be so sooooo happy when receiving it. <br />
              Love diu a lot.
            </div>
          </q-parallax>
        </div>
        <div class="row">
          <div class="line"></div>
        </div>
        <div class="introduction">
          <p>Scroll down to see our beautiful pictures</p>
        </div>
        <div class="row">
          <div class="line" style="border-bottom: 1px"></div>
        </div>
        <div>
          <img
            src="~assets/pic1_bubududu.jpg"
            style="
              width: 50%;
              height: auto;
              display: block;
              margin-left: auto;
              margin-right: auto;
            "
          />
        </div>
        <div class="container">
          <img
            src="~assets/received_2516505508640754.jpeg"
            style="
              width: 100%;
              height: 200px;
              object-fit: cover;
              object-position: 0 21%;
            "
          />
          <div class="txtsec1">
            Our 1st year <br />
            Full of love hehe
          </div>
        </div>
        <div class="row q-pa-sm q-col-gutter-md">
          <div class="col-7">
            <q-img
              class="sec1"
              src="~assets/B0D1C18A-D0BE-4524-B917-480C7D0C36CD-1.jpg"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                We hangout èn bị cơ động phạt =))
              </div>
            </q-img>
          </div>
          <div class="col-5">
            <q-img
              class="sec1"
              src="~assets/D1F68FB1-1B80-4401-BA97-BB33706EA70B-1.jpg"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Our first nice homestay with bathtub
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec1" src="~assets/IMG_20200912_124505_556.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hangout
              </div>
            </q-img>
          </div>
          <div class="col-4">
            <q-img class="sec1" src="~assets/IMG_20201221_140133.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hangout
              </div>
            </q-img>
          </div>
          <div class="col-5">
            <q-img class="sec1" src="~assets/received_2516505508640754.jpeg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Èn hangout
              </div>
            </q-img>
          </div>
          <div class="col-6">
            <q-img class="sec1" src="~assets/1614350751101.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hí hí love
              </div>
            </q-img>
          </div>
          <div class="col-6">
            <q-img
              class="sec1"
              src="~assets/8DAF140B-2793-4C3C-8E44-105CB4CC4A9D-1.jpg"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Gần tết dương lịch nè hô hô
              </div>
            </q-img>
          </div>
          <div class="col-5">
            <q-img class="sec1" src="~assets/1628329502875.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Covid cách ly đầu ngõ các thứ
              </div>
            </q-img>
          </div>
          <div class="col-7">
            <q-img class="sec1" src="~assets/received_410555304067889.jpeg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Đi bảo tàng chơi nè
              </div>
            </q-img>
          </div>
        </div>
        <div class="container">
          <img
            src="~assets/cover.jpg"
            style="
              width: 100%;
              height: 200px;
              object-fit: cover;
              object-position: 0 33%;
            "
          />
          <div class="txtsec2">
            Our 2nd year <br />
            We still love each other a lot hehe
          </div>
        </div>
        <div class="row q-pa-sm q-col-gutter-md">
          <div class="col-4">
            <q-img class="sec2" src="~assets/PXL_20220209_033020485.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Working at KPMG together yay
              </div>
            </q-img>
          </div>
          <div class="col-8">
            <q-img class="sec2" src="~assets/PXL_20220214_060020698.MP.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Iu hehe
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec2" src="~assets/received_2498014037001643.jpeg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Go out and plei
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec2" src="~assets/PXL_20220219_131633383.NIGHT.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Go out and plei
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec2" src="~assets/PXL_20220312_133415588.MP.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Go out and plei
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec2" src="~assets/IMG_20211209_204619.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Go out and plei
              </div>
            </q-img>
          </div>
          <div class="col-6">
            <q-img class="sec2" src="~assets/1641832447935.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hí hí hí =))
              </div>
            </q-img>
          </div>
          <div class="col-4">
            <q-img class="sec2" src="~assets/received_942709386684541.jpeg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Thợ nặn gốm đỉnh cao (sau khi fail 1 loạt)
              </div>
            </q-img>
          </div>
          <div class="col-2">
            <q-img class="sec2" src="~assets/PXL_20220608_053756313.MP.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Đi chùa thanh tịnh
              </div>
            </q-img>
          </div>
          <div class="col-7">
            <q-img class="sec2" src="~assets/PXL_20220212_015622106.MP.jpg" />
          </div>
          <div class="col-5">
            <q-img class="sec2" src="~assets/PXL_20220804_083145590.jpg" />
          </div>
        </div>
        <div class="thirdyear">
          <h3 style="font-weight: 300">THEN OUR 3RD YEAR AND SO ON</h3>
          <br />
          <p
            style="
              font-size: 30px;
              color: darkslategrey;
              font-style: italic;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            "
          >
            I still want to expand it
          </p>
        </div>
        <div class="row q-pa-sm q-col-gutter-md">
          <div class="col-3">
            <q-img class="sec3" src="~assets/PXL_20220827_050725461.MP.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Đà Nẵng
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec3" src="~assets/PXL_20220919_053311225.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Ba Vì
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec3" src="~assets/PXL_20221017_232036032.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hải Phòng
              </div>
            </q-img>
          </div>
          <div class="col-3">
            <q-img class="sec3" src="~assets/PXL_20230220_140839988.MP.jpg">
              <div class="absolute-bottom text-subtitle1 text-center">
                Hồ Chí Minh
              </div>
            </q-img>
          </div>
        </div>
        <div
          style="
            margin-top: 10px;
            background-image: linear-gradient(
              to bottom right,
              rgba(217, 59, 82, 0.7),
              rgba(244, 77, 41, 0.8)
            );
            color: antiquewhite;
            font-size: 40px;
            text-align: center;
          "
        >
          Happy Valentine babibooboo 🌹🌹👄👄
        </div>
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn
            fab
            icon="keyboard_arrow_up"
            style="color: rgba(204, 34, 176, 0.8)"
          />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style>
div .headLetter {
  color: white;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.row .line {
  width: 100%;
  height: 2px;
  background-color: slategrey;
  display: flex;
  justify-content: center;
  margin: 100px 100px 50px 100px;
}
.introduction {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.container {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 40px;
}
.txtsec1 {
  position: absolute;
  top: 50px;
  left: 0px;
  background-color: rgba(255, 243, 253, 0.8);
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 200;
  font-size: large;
  word-spacing: 20px;
}
.txtsec2 {
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: rgba(255, 243, 253, 0.8);
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 200;
  font-size: large;
  word-spacing: 20px;
  text-align: right;
}
.sec1 {
  object-fit: cover;
}
.thirdyear {
  text-align: center;
}
</style>

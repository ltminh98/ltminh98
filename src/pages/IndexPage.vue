<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <q-parallax :height="1200" :speed="0.8" src="~assets/bubu1.jpg">
          </q-parallax>
        </div>
        <div class="row">
          <div class="line"></div>
        </div>
        <div class="introduction">
          <p>
            Hellu babibooboo,
            <br />
            Life has never been easy for all of us right? But let's put it aside
            and celebrate your birthday, because you deserve that.
            <b>Happy birthday to diuuuuuu</b>.
            <br />
            I wish you a happy birthday, with all the best you receive. I wish
            you will feel better and better and live what you like. I wish we
            will be soon together, and together again in the future. I wish my
            pain will go away and I can enjoy activities with you. I wish we
            will have a shibu then.
            <br />
            And I wish you come home and play game with me tonight babi.
            <br />
            Love you so much.
            <br />
            P/s: I love you more than I love you in the past hehe
          </p>
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
        <div>
          <img
            src="~assets/bubu2.jpg"
            style="
              width: 50%;
              height: auto;
              display: block;
              margin-left: auto;
              margin-right: auto;
            "
          />
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

.headText {
  color: brown;
  font-weight: bold;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
  text-align: center;
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

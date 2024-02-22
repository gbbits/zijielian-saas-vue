<template>
  <q-page>
        <q-carousel
          animated
          v-model="slide"
          arrows
          swipeable
          navigation
          infinite
          autoplay
          control-color="white"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="639px"
        >
          <q-carousel-slide class="q-pa-none" :name="1" img-src="/images/image_1.jpg">
            <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
              <div class="custom-caption">
                  <div class="text-h2 main_line animation_2">
                    WELCOME TO <span :style="'color:'+rootStore.themeColor">KUDOS</span>
                  </div>
                  <br><br><br>
                <div class="text-h4 animation_1">The Web as I envisaged it, we have not seen it yet. The future<br> is still so much bigger than the past.</div><br><br><br>
                <div class="animation_2">
                  <q-btn size="md" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none" :name="2" img-src="/images/image_2.jpg">
            <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
              <div class="custom-caption">
                <div class="text-h2 main_line animation_2" style="font-size:65px;"><span :style="'color:'+rootStore.themeColor">KUDOS</span> FOR THE BEST</div><br><br><br>
                <div class="text-h4 animation_1">A man who dares to waste one hour of time has <br>not discovered the value of life.</div><br><br><br>
                <div class="animation_2">
                  <q-btn size="md" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none" :name="3" img-src="/images/image_3.jpg">
            <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
              <div class="custom-caption">
                <div class="text-h2 main_line animation_2" style="font-size:65px;">THE PATH OF <span :style="'color:'+rootStore.themeColor">SUCCESS</span></div><br><br><br>
                <div class="text-h4 animation_1">We have to stop optimizing for programmers and <br>start optimizing for users.</div><br><br><br>
                <div class="animation_2">
                  <q-btn size="md" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="ballot" :style="'color:'+rootStore.themeColor"/>
                <div class="text-h6">Web &nbsp;Design</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="view_comfy" :style="'color:'+rootStore.themeColor"/>
                <div class="text-h6">Graphics Design</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="people" :style="'color:'+rootStore.themeColor"/>
                <div class="text-h6">Wordpress Theme</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>

          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">


              <q-card-section>
                <q-icon size="110px" name="people" :style="'color:'+rootStore.themeColor"/>
                <div class="text-h6">Wordpress Plugin</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="quote">
          <div class="q-pt-xl full-width full-height flex flex-center" style="background-color: #000000ad !important;">
            <h3 class="text-white text-center">Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do
              eiusmod tempor incididunt ut <br> labore et dolore magna aliqua.
              <br>
              <br>
              <q-btn type="a" href="https://github.com/sponsors/mayank091193" size="lg"
                     :style="'background:'+ rootStore.themeColor +'; color: white'" label="Support Me"/>
            </h3>
          </div>
        </div>
        <div style="background: #f7f7f7" id="portfolio">
          <br>
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center">Our Portfolio
                <br>
                <span class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
              </h5>
            </div>
          </div>
          <br>
          <div class="row text-center" style="padding-bottom: 99px">
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
              <div style="line-height:0">
                <span v-for="index in 6" :key="index">
                  <q-flashcard :no-hover="hover" :style="style">
                    <q-flashcard-section transition="nudge-in" :active="active">
                      <img :src="'/images/'+index+'.jpg'" width=340 height=263>
                    </q-flashcard-section>
                    <q-flashcard-section transition="fade-in" class="fit" :active="active">
                      <div class="fit" :style="background_style"></div>
                      <q-flashcard-section transition="drop-down" class="text-center my-header" :active="active">
                        Profile Title
                      </q-flashcard-section>
                      <q-flashcard-section transition="slide-up-in" class="my-text" :active="active">
                        For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.
                      </q-flashcard-section>
                      <q-flashcard-section transition="fade-in" class="fit flex justify-center items-end q-pb-lg"
                                           :active="active">
                        <q-btn class="q-mr-md" :style="'color:'+rootStore.themeColor" style="background-color:white" round
                               icon="card_giftcard"/>
                        <q-btn :style="'color:'+rootStore.themeColor" style="background-color:white" round icon="link"/>
                      </q-flashcard-section>
                    </q-flashcard-section>
                  </q-flashcard>
                  <br v-if="index==3"/>
                  </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="id_about_us">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">About Us
              <br>
              <span
                class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </h5>
          </div>
        </div>
        <div class="row text-center flex flex-center">
          <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_1.jpg"
                />

                <q-card-section>
                  <div class="text-overline text-orange-9">Overline</div>
                  <div :style="'color: ' + about_heading_color_1" class="text-h6 q-mt-sm q-mb-xs">OFFICE PHILOSOPHY</div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card :style="'color: ' + about_heading_color_2" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_2.jpg"
                />

                <q-card-section>
                  <div class="text-overline text-orange-9">Overline</div>
                  <div :style="'color: ' + about_heading_color_2" class="text-h6 q-mt-sm q-mb-xs">OFFICE MISSION</div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_3.jpg"
                />

                <q-card-section>
                  <div class="text-overline text-orange-9">Overline</div>
                  <div :style="'color: ' + about_heading_color_3" class="text-h6 q-mt-sm q-mb-xs">OFFICE VALUE & RULES</div>
                  <div class="text-caption text-grey-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div style="background: #f7f7f7" id="id_services">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center">Our Services
                <br>
                <span
                  class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </h5>
            </div>
          </div>
          <div class="q-pa-xl">
            <div class="row q-col-gutter-sm ">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs ">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="compare_arrows" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Blockchain</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="web" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Web Design</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="fab fa-wordpress" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Wordpress</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs ">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="settings" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">DevOps</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="fas fa-database" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">Big Data</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                  <q-item-section side :style="'background-color:' + rootStore.themeColor" class="q-pa-sm q-mr-none text-white">
                    <q-icon name="dynamic_feed" size="65px"></q-icon>
                  </q-item-section>
                  <q-item-section class="q-pa-md q-ml-none">
                    <q-item-label class="text-h6 text-grey-9 text-uppercase">AI</q-item-label>
                    <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
        <div class="pricing" id="id_pricing">
          <div class="" style="background-color: #000000ad !important;">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">Our Pricing Plan
                  <br>
                  <span
                    class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </h5>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-px-xl">
              <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section class="text-white" style="background: #ec982f">
                    <div class="text-h6 text-center">
                      FREE
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                      <q-item><span class="text-weight-bold">For small size companies</span></q-item>
                      <q-item>
                        50 GB storage
                      </q-item>
                      <q-item>
                        10 Domains
                      </q-item>
                      <q-item>
                        15 Projects
                      </q-item>
                      <q-item>
                        Free Deployment
                      </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #ec982f">
                    <div class="text-center">
                      <span class="text-h2 text-center">$0</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn size="md" class="full-width q-pa-xs"
                             style="background: #ec982f; color: white" label="Choose Plan"/>
                      <br>
                      <div class="q-mt-md">Terms and Conditions apply</div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section class="text-white" style="background: #f4655f">
                    <div class="text-h6 text-center">
                      STANDARD
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                      <q-item><span class="text-weight-bold">For medium companies</span></q-item>
                      <q-item>
                        50 GB storage
                      </q-item>
                      <q-item>
                        10 Domains
                      </q-item>
                      <q-item>
                        15 Projects
                      </q-item>
                      <q-item>
                        Free Deployment
                      </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #f4655f">
                    <div class="text-center">
                      <span class="text-h2 text-center">$50</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn size="md" class="full-width q-pa-xs"
                             style="background: #f4655f; color: white" label="Choose Plan"/>
                      <br>
                      <div class="q-mt-md">Terms and Conditions apply</div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section class="text-white q-pa-md" style="background: #8b3bbd">
                    <div class="text-h6 text-center">
                      PREMIUM
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                      <q-item><span class="text-weight-bold">For average companies</span></q-item>
                      <q-item>
                        50 GB storage
                      </q-item>
                      <q-item>
                        10 Domains
                      </q-item>
                      <q-item>
                        15 Projects
                      </q-item>
                      <q-item>
                        Free Deployment
                      </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #8b3bbd">
                    <div class="text-center">
                      <span class="text-h2 text-center">$250</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn size="md" class="full-width q-pa-xs"
                             :style="'background: #8b3bbd; color: white'" label="Choose Plan"/>
                      <br>
                      <div class="q-mt-md">Terms and Conditions apply</div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section class="text-white" style="background: #3b97d1">
                    <div class="text-h6 text-center">
                      PROFESSIONAL
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                      <q-item><span class="text-weight-bold">For large companies</span></q-item>
                      <q-item>
                        50 GB storage
                      </q-item>
                      <q-item>
                        10 Domains
                      </q-item>
                      <q-item>
                        15 Projects
                      </q-item>
                      <q-item>
                        Free Deployment
                      </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #3b97d1">
                    <div class="text-center">
                      <span class="text-h2 text-center">$500</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn size="md" class="full-width q-pa-xs"
                             style="background:#3b97d1; color: white" label="Choose Plan"/>
                      <br>
                      <div class="q-mt-md">Terms and Conditions apply</div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <br>
            <br>
          </div></div>
        <div class="row" id="id_news">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">Latest News
              <br>
              <span
                class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </h5>
          </div>
        </div>
        <div class="row text-center flex flex-center">
          <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_1.jpg"
                />

                <q-card-section class="text-left">

                  <div :style="'color: ' + about_heading_color_1" class="text-h6 q-mt-sm q-mb-xs">LATEST NEWS 1</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div><br>
                    <q-btn size="sm" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card :style="'color: ' + about_heading_color_2" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_2.jpg"
                />

                <q-card-section class="text-left">

                  <div :style="'color: ' + about_heading_color_2" class="text-h6 q-mt-sm q-mb-xs">LATEST NEWS 2</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div><br>
                    <q-btn size="sm" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/images/about_3.jpg"
                />

                <q-card-section class="text-left">

                  <div :style="'color: ' + about_heading_color_3" class="text-h6 q-mt-sm q-mb-xs">LATEST NEWS 3</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </div>
                  <div><br>
                    <q-btn size="sm" :style="'background:'+ rootStore.themeColor +'; color: white'" label="READ MORE"/>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div class="contact_us" id="id_contact_us">
          <div style="background-color: #000000ad !important;">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">Contact Us
                  <br>
                  <span
                    class="text-center text-grey text-h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </h5>
              </div>
            </div>
            <div class="row text-center flex flex-center q-pb-lg">

              <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <q-input bg-color="white" outlined label="Your Name *">
                  <template v-slot:append>
                    <q-icon name="event" :style="'color:' + rootStore.themeColor" />
                  </template>
                </q-input>
                <q-input bg-color="white" outlined label="Your Email *">
                  <template v-slot:append>
                    <q-icon name="event" :style="'color:' + rootStore.themeColor" />
                  </template>
                </q-input>
                <q-input bg-color="white" outlined label="Your Phone *">
                  <template v-slot:append>
                    <q-icon name="event" :style="'color:' + rootStore.themeColor" />
                  </template>
                </q-input>
              </div>
              <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <q-input class="" type="textarea" bg-color="white" outlined label="Your Message *">
                  <template v-slot:append>
                    <q-icon name="event" :style="'color:' + rootStore.themeColor" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row flex flex-center text-center q-pb-xl q-mt-md">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
                <q-btn size="lg" :style="'background:'+ rootStore.themeColor +'; color: white'" label="Send Message"/>
              </div>
            </div>
          </div>
        </div>


      </q-page>
</template>

<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script>
import {computed, defineComponent, ref, watch} from 'vue'
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll

import {QFlashcard, QFlashcardSection} from '@quasar/quasar-app-extension-qflashcard'
import {useRootStore} from "stores/root";

export default defineComponent({
  name: 'IndexPage',
  components: {
    QFlashcard,
    QFlashcardSection
  },
  setup(){
    const rootStore = useRootStore()

    /**
     * 导航监听
     * @type {ComputedRef<*>}
     */
    const anchor = computed(()=>{
      return rootStore.anchor
    })
    watch(anchor, function (value, oldValue){
        let el = document.getElementById(value)
        const target = getScrollTarget(el)
        const offset = el.offsetTop + 3
        const duration = 900
        setVerticalScrollPosition(target, offset, duration)
    })

    const themeColor = computed(()=>{
      return 'background-color:' + rootStore.themeColor.split(')')[0] + ',0.7)'
    })

    return{
      rootStore,
      slide: ref(1),
      hover: ref(false),
      active: ref(false),
      background_style: themeColor,
      about_heading_color_1: ref('#424242'),
      about_heading_color_2: ref('#424242'),
      about_heading_color_3: ref('#424242'),
      style: computed(()=>{
        return {
          width: '340px',
          height: '263px',
          // backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
          textAlign: 'center',
          boxShadow: '1px 1px 2px #e6e6e6',
          display: 'inline-block'
        }
      }),
      team_style: computed(()=>{
        return {
          width: '260px',
          height: '263px',
          // backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
          textAlign: 'center',
          boxShadow: '1px 1px 2px #e6e6e6',
          display: 'inline-block'
        }
      }),
    }
  },

})
</script>


<style lang="sass" scoped>
.main_line
  font-size: 75px
  letter-spacing: 5px
  line-height: 60px
  font-weight: 600

.custom-caption
  text-align: center
  padding: 12px
  color: white


.animation_1
  -webkit-animation: bounceIn 1s ease-in 800ms both
  animation: bounceIn 1s ease-in 800ms both

.animation_2
  -webkit-animation: flipInX 2s ease-in-out 800ms both
  animation: flipInX 1s ease-in-out 800ms both

.animation_3
  -webkit-animation: lightSpeedIn 1s ease-in 800ms both
  animation: lightSpeedIn 1s ease-in 800ms both

.description
  padding: 10px
  background-color: black
  color: white
  box-shadow: 1px 1px 2px #e6e6e6

.my-header
  width: 200px
  top: 0
  height: 45px
  color: black
  background-color: rgba(255,255,255, 0.8)
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 20px 0 0 68px
  padding: 25px

.my-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 79px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.my-button-container
  width: 100%

.my-button
  text-decoration: none
  text-transform: uppercase
  margin: 0 0 20px 0
  text-align: center
  padding: 7px 14px
  background-color: #000
  color: #fff
  text-transform: uppercase
  box-shadow: 0 0 1px #000
  transition-delay: 0.2s

.my-button:hover
  box-shadow: 0 0 5px #000

.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important

.my-card
  width: 350px
  max-width: 350px
  margin-top: 10px

.team-header
  width: 100%
  top: 0
  height: 45px
  color: white
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 60px 0 0 0
  padding: 12px

.team-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 100px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.quote
  background: url(/images/parallax.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.pricing
  background: url(/images/pricing.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.contact_us
  background: url(/images/contact_us.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat


</style>


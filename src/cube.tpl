<div class="cubebox-tmpl-wrap">
  {{#if loading}}
    <div class="loading"></div>
  {{/if}}

  <div class="carousel-box">
    <Carousel
      interval="3000"
      width="368"
      height="155"
      btns="hover">
      {{#list carouselList as item by item_index}}
        <Carousel.Item>
        <div class="carousel-item">
          <a href="{{item.url}}" target="_blank">
            <img src="{{item.pic | clipImage:'368_155_75'}}" width="368" height="155" alt="">
            <p class="ext">
              <span class="bg"></span>
              <span class="title">{{item.text}}</span>
            </p>
          </a>
        </div>
        </Carousel.Item>
      {{/list}}
    </Carousel>
  </div>

  <div class="infor-box">
    <ul>
      {{#list textList as item by item_index}}
      <li class="infor-item">
        <a href="{{item.url}}" target="_blank">{{item.text}}</a>
      </li>
      {{/list}}
    </ul>
  </div>
</div>
# 标准资讯 cube 模板，1*n大图 + 4文字资讯

## 介绍
标准资讯类模板，适合新闻资讯类场景
## 使用
```
cubetool init <cubeid> -t https://github.com/ntt360/cube-tpl-news-1pic6text.git
```
或简写：
```
cubetool init <cubeid> -t ntt360/cube-tpl-news-1pic6text
```

## UI预览
![标准资讯类模板 UI 预览图](https://raw.githubusercontent.com/ntt360/cube-tpl-news-1pic6text/master/ui/ui.png)

## data格式
```json
{
  "img_list": [
    {
      "pic": "//hao6.qhimg.com/t01d90bdbb631e34186.png?676*375",
      "text": "李汶翰红格子叠穿黑色西装  李汶翰妈妈肤白貌美宛若少女",
      "url": "https://yule.360.cn/photo/detail/588949"
    },
    {
      "pic": "//hao6.qhimg.com/t011ac22cc25273649c.png?1074*597",
      "text": "宋茜任《超新星全运会》嘉宾解说 甜酷运动风气场满分",
      "url": "https://yule.360.cn/photo/detail/588920"
    },
    {
      "pic": "//hao6.qhimg.com/t0158e3fad49ba22c42.jpg?1620*1080",
      "text": "盛一伦中山装器宇轩昂  献唱《中国人》庆祝澳门回归",
      "url": "https://yule.360.cn/photo/detail/588910"
    },
    {
      "pic": "//hao6.qhimg.com/t010c2c2c7255f8c19d.png?4232*2351",
      "text": "尹正简约休闲风亮相品牌活动 介绍新作感恩粉丝活力满满",
      "url": "https://yule.360.cn/photo/detail/588781"
    }
  ],
  "text_list": [
    {
      "text": "《亲爱的客栈》持续热播 管家吴磊工作认真排名持续领先",
      "url": "https://yule.360.cn/photo/detail/588779"
    },
    {
      "text": "“不老小龙女”李若彤钻石裙大露香肩，优雅贵妇既视感",
      "url": "https://yule.360.cn/photo/detail/588770"
    },
    {
      "text": "阿信下腰搂抱蔡依林，网友们全变柠檬精！",
      "url": "https://yule.360.cn/photo/detail/588769"
    },
    {
      "text": "李汶翰红格子叠穿黑色西装  李汶翰妈妈肤白貌美宛若少女",
      "url": "https://yule.360.cn/photo/detail/588949"
    }
  ]
}
```

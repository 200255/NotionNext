/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
 WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://raw.githubusercontent.com/imuncle/live2d/master/model/xiaomai/xiaomai.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models//https://imuncle.github.io/live2d/
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

       cover:
        'https://p1.music.126.net/nY91mI4e9cAJA1y6l7HqYg==/109951168262177179.jpg'
    },
     {
      name: 'ひらひら ひらら',
      artist: '绮亚 / 出航',
      url: 'https://music.163.com/song/media/outer/url?id=1463844530.mp3',
      cover:
        'https://p1.music.126.net/zQaV3dJcQxJhhINg2lp_hQ==/109951165149987051.jpg'
    },
     {
      name: '拍手喝采歌合',
      artist: '朝ノ瑠璃',
      url: 'https://music.163.com/song/media/outer/url?id=2091408576.mp3',
      cover:
        'https://p1.music.126.net/AeVDX8wNwvAts2c1afZJAQ==/109951168987516458.jpg'
    },
     {
      name: '刻印',
      artist: '朝ノ瑠璃',
      url: 'https://music.163.com/song/media/outer/url?id=2155022204.mp3',
      cover:
        'https://p1.music.126.net/eeKdiv89II1xy06IvWHEaQ==/109951169582686555.jpg'
    },
     {
      name: 'beloved ~桜の彼方へ~ - full ver.',
      artist: 'Spanky / ユージ・ナイトー',
      url: 'https://music.163.com/song/media/outer/url?id=684741.mp3',
      cover:
        'https://p2.music.126.net/ZPhNBlV6xYXnWC7_Et4mBA==/5948357906463864.jpg'
    },
    {
      name: '夢幻の蒼空',
      artist: 'Silver Forest / Saya',
      url: 'https://music.163.com/song/media/outer/url?id=1333407153.mp3',
      cover:
        'https://p2.music.126.net/TL70nvBCu2U9-kr1nZR0eg==/109951163725532617.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '9466298309', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '0', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}

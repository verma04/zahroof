import styled from "styled-components";

export const Section = styled.section`
 html, body, object, iframe, h1, h2, h3, h4, h5, h6, div.paragraph, blockquote, pre, a, abbr, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {margin: 0; padding: 0; border: 0; list-style: none; }
 html, body, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {margin: 0; padding: 0; border: 0; list-style: none; }
 ul{list-style:none}
 fieldset{border:0}
 a img{border:0}
 .clearfix:before, .clearfix:after{ content:"\0020"; display:block; height:0; overflow:hidden }
 .clearfix:after{ clear:both }
 .clearfix{ zoom:1 }
 input[type="text"], input[type="password"], textarea{ border:0 none; background:#d3d3d3 !important; -moz-box-shadow: inset 0 3px 6px rgba(0,0,0,0.4); -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,0.4); box-shadow: inset 0 3px 6px rgba(0,0,0,0.4); -moz-border-radius:5px; -webkit-border-radius:5px; border-radius:5px; font:italic12px Georgia,serif; color:#727272; width:180px}
 input[type="text"], input[type="password"]{ height:30px; line-height:30px; padding:0 10px}
 input.wsite-form-input{ padding:0 5px !important}
 textarea.wsite-form-input{ padding:5px !important}
 input[type="submit"]{ border:0 none; background-color:#4f4f4f; color:#fff; -moz-border-radius:5px; -webkit-border-radius:5px; border-radius:5px; padding:0 10px; font:12px/28px Arial,sans-serif; text-transform:uppercase; height:30px}
 .ie7 input[type="submit"]{ padding-left:0; padding-right:0; height:auto}
 input[type="submit"]:hover{ background-color:#787878}
 .wsite-form-container{ margin-top:0 !important}
 #wsite-search-query{height: 50px;}
 #wsite-search-submit {border: 1px solid #A8A8A8;height: 33px;right: 10px;background-color: white;}
 .wsite-input.wsite-search-element-input[type="text"]{width: 100%;}
 .wsite-button { color: #fff !important; font-family: Arial, Helvetica, sans-serif; height: 34px; display: inline-block; font-size: 12px; border: none; font-size: 13px; text-decoration: none; padding: 0 15px 0 0; background: url(theme/button.png?1626762518) no-repeat 100% -105px; }
 .wsite-button:hover { background-position: 100% -140px; }
 .wsite-button:active { background-position: 100% -175px; }
 .wsite-button-inner { height: 34px; line-height: 34px; display: block; font-size: 14px; border: none; text-decoration: none; padding: 0 10px 0 25px; background: url(theme/button.png?1626762518) no-repeat 0 0; }
 .wsite-button:hover .wsite-button-inner { background-position: 0 -35px; }
 .wsite-button:active .wsite-button-inner { background-position: 0 -70px; }
 .wsite-button-large { height: 41px; background: url(theme/button_large.png?1626762518) no-repeat 100% -126px; padding: 0 15px 0 0; }
 .wsite-button-large:hover { background-position: 100% -168px; }
 .wsite-button-large:active { background-position: 100% -210px; }
 .wsite-button-large .wsite-button-inner { height: 41px; line-height: 41px; padding: 0 10px 0 25px; background: url(theme/button_large.png?1626762518) no-repeat 0 0; }
 .wsite-button-large:hover .wsite-button-inner { background-position: 0 -42px; }
 .wsite-button-large:active .wsite-button-inner { background-position: 0 -84px; }
 .wsite-button-large.wsite-button-highlight { background-image: url(theme/button_large_highlight.png?1626762518); }
 .wsite-button-large.wsite-button-highlight .wsite-button-inner { background-image: url(theme/button_large_highlight.png?1626762518); }
 .wsite-button-highlight { color: #ffffff !important; background-image: url(theme/button_highlight.png?1626762518); }
 .wsite-button-highlight .wsite-button-inner { background-image: url(theme/button_highlight.png?1626762518); }
 hr.styled-hr { background-color: #cccccc; border: 0px none; height: 1px; margin: 0 auto; text-align: center; }
 a:link, a { text-decoration: none; color: #04B5DE; }
 a:hover, a:visited { color: #626A71; text-decoration: none; }
 div.paragraph { line-height: 205%; color: #626A71; font-family: Helvetica, 'Lato', Arial; }
 p { line-height: 205%; color: #626A71; font-family: Helvetica, 'Lato', Arial; }
 h1, h2, h3, h4, h5, h6 { color: #54606b; font-family: 'Lato', Trebuchet MS, serif; font-weight: 300; letter-spacing: -0.018em; }
 h1 { font-size: 46px; line-height: 51px; margin-bottom: 12px; letter-spacing: -0.045em; }
 h2 { font-size: 30px; line-height: 40px; margin-bottom: 10px; }
 blockquote {font-size: 15px;}
 html{ width: 100%; height: 100%; }
 body{ font: 14px/21px 'Latos', Trebuchet MS, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; font-family: Lato, sans-serif; font-size: 12px; line-height: 150%; color: #242424; background: #6f6f6f url("theme/bodybg.jpg?1626762518") top center; background-attachment: fixed; background-size: 100% auto; height: auto; width: 100%; }
 #icontent_container { background-size: 100% auto !important; }
 #wrapper{ margin: 0 auto; padding: 10px 0; }
 .Container { background: url("theme/navbg.jpg?1626762518") repeat; width: 980px; margin: 0 auto; overflow: hidden; -webkit-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.6); -moz-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.6); box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6); }
 header { width: 100%; margin: 0 auto; }
 #header { position: relative; width: 940px; padding: 20px; margin: 0 auto; }
 #logo { position: relative; padding: 0 20px 0 0; float: left; font-weight: 900; font-size: 32px; line-height: 140%; }
 #navigation{ max-width: 720px; float: right; }
 #navigation a { padding: 0 20px; line-height: 30px; display: inline-block; text-decoration: none; text-transform: Uppercase; margin-top: 20px; }
 }
 #navigation ul{ margin:0; list-style:none; }
 #navigation li{ float:left }
 #wsite-menus .wsite-menu-wrap { z-index: 5000; margin: 0; margin-top: 0 !important;}
 #wsite-menus .wsite-menu { padding: 0; margin: 0; list-style: none; }
 #wsite-menus .wsite-menu li { width: 162px; text-align: left; margin-top: 1px;}
 #wsite-menus .wsite-menu li a { border: none; display: block; background-color: #ebebeb; text-decoration: none; font-size: 12px; font-weight: normal; line-height:1; padding: 5px 0px; color: #000; font-family: sans-serif; width: 160px; height: auto; }
 #wsite-menus .wsite-menu-wrap, #wsite-menus .wsite-menu-wrap { z-index: 5000; margin: 0; postiion: relative !important; }
 #bar{ width: 730px; background: url('theme/barbg.jpg?1626762518'); float: right; margin: -20px 0 0 0; z-index: 10; }
 .bar-text{ float: left; padding: 10px 15px; color: #959595; font-family: "Lato", sans-serif; font-size: 12px; width: 350px; text-align: left; }
 .wsite-social { vertical-align: middle; }
 .wsite-social-item { width: 20px; height: 20px; margin: 0 0 0 4px; }
 .wsite-social-facebook, .wsite-social-facebook:active {background:url(theme/facebook.png?1626762518) no-repeat top left}
 .wsite-social-facebook:hover {background-position: bottom left}
 .wsite-social-pinterest, .wsite-social-pinterest:active {background:url(theme/pinterest.png?1626762518) no-repeat top left}
 .wsite-social-pinterest:hover {background-position:bottom left;}
 .wsite-social-twitter, .wsite-social-twitter:active {background:url(theme/twitter.png?1626762518) no-repeat top left}
 .wsite-social-twitter:hover {background-position:bottom left;}
 .wsite-social-linkedin, .wsite-social-linkedin:active {background:url(theme/linkedin.png?1626762518) no-repeat top left}
 .wsite-social-linkedin:hover {background-position:bottom left;}
 .wsite-social-mail, .wsite-social-mail:active {background:url(theme/mail.png?1626762518) no-repeat top left}
 .wsite-social-mail:hover {background-position:bottom left;}
 .wsite-social-rss, .wsite-social-rss:active {background:url(theme/rss.png?1626762518) no-repeat top left}
 .wsite-social-rss:hover {background-position:bottom left;}
 .wsite-social-flickr, .wsite-social-flickr:active {background:url(theme/flckr.png?1626762518) no-repeat top left}
 .wsite-social-flickr:hover {background-position:bottom left;}
 .wsite-social-plus, .wsite-social-plus:active {background:url(theme/google.png?1626762518) no-repeat top left}
 .wsite-social-plus:hover {background-position:-bottom left;}
 .wsite-social-vimeo, .wsite-social-vimeo:active {background:url(theme/vimeo.png?1626762518) no-repeat top left}
 .wsite-social-vimeo:hover {background-position:bottom left;}
 .wsite-social-yahoo, .wsite-social-yahoo:active {background:url(theme/yahoo.png?1626762518) no-repeat top left}
 .wsite-social-yahoo:hover {background-position:bottom left;}
 .wsite-social-youtube, .wsite-social-youtube:active {background:url(theme/youtube.png?1626762518) no-repeat top left}
 .wsite-social-youtube:hover {background-position:bottom left;}
 .social-frame{padding: 10px 15px; float: right}
 div[role="main"] { width: 100%; margin: 0 auto; }
 #content{ padding: 50px 20px; background: url('theme/contentbg.jpg?1626762518'); }
 .content{ padding: 0; width: 100%; margin: 0; border-spacing: 0; }
 .content td { vertical-align: top; }
 #sidebar-content { width: 180px; min-height: 300px; height: auto; vertical-align: top; padding: 30px 35px; }
 .sidebar{ vertical-align: top; background: #e4e4e4; }
 .text-header .sidebar{ background: none; border-left: solid 1px #dfdfdf; }
 #main-content { min-height: 300px; height: auto; vertical-align: top; padding: 50px 25px; width: 650px; }
 .sliderContainer{ width: 100%; min-height: 200px; height:auto; max-height:600px; overflow:hidden; padding-bottom:0; background: none; }
 .wsite-header{ width: 100%; height: 400px; background:transparent url(theme/default_header.jpg?1626762518) 0 50% no-repeat; background-position: center middle; }
 #video-text div.paragraph, #video-text h2{ padding: 15px; }
 #video-text p, #video-text h2{ padding: 15px; }
 #video-text { width: 290px; float: left; margin-top: 50px; margin-left: 30px; }
 #video{ padding-left: 350px; text-align: right; height: 338px; width: 560px; float: none; margin: 50px 30px 50px 0; }
 .landing .wsite-header, .home .wsite-header { width: 100%; height: 400px; background:transparent url("theme/landing-header.jpg?1626762518") 50% 0; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 .video .wsite-header{ width: 100%; height: auto; background:transparent url("theme/video-header.jpg?1626762518") 50% 0; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 .dd-header .wsite-header{ width: 100%; height: auto; background:transparent url("theme/video-header.jpg?1626762518") 50% 0; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 #dd-header{ padding: 40px 30px; min-height: 200px; height: auto; }
 .tall-header .wsite-header{ width: 100%; height: 400px; background:transparent url("theme/tall-header.jpg?1626762518") 50% 0; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 .short-header .wsite-header{ width: 100%; height: 200px; background:transparent url("theme/short-header.jpg?1626762518") 50% 0; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 .page-title{ padding: 20px 25px 15px 25px; border: solid 1px #dfdfdf; border-left: none; border-right: none; }
 .page-title h2{ font-size: 30px; line-height: 100%; font-weight: 500; }
 #feature{ background: #d2d1d0; width: 940px; padding: 35px 20px; margin: 0px; border-top: 1px solid #bab9b8; border-bottom: 1px solid #bab9b8; float: left; color: #CCC; min-height: 100px; }
 footer { width: 100%; margin: 0 auto; overflow: hidden; background: url("theme/footerbg.jpg?1626762518") repeat; }
 .footer-content{ padding: 50px 35px 35px 35px; height: auto; min-height: 50px; }
 .copyright{ padding: 10px 35px; height: 50px; }
 .copyright, .weeblyfooter{ background: #303030; font-size: 10px; height: 12px; text-align: left; color: #C6C6C6; }
 .weeblyfooter{display:none;}
 .design{ font:11px Arial,sans-serif; color:#979797; text-align: center; padding: 0; text-indent: -2400px; position: absolute; }
 #footer div.paragraph{ }
 #footer p{ }
 #footer h2{ }
 #footer a{ }
 #footer a:hover{ }
 #footer a:visited{ }
 #navigation a{color:#242424;}
 #navigation a:hover, #active a { color:#68a1bb;}
 #wsite-menus .wsite-menu li a:hover, #wsite-menus .wsite-menu li.weebly-nav-current a{background-color:#68a1bb; color:#ffffff;}
 #navigation{ font-size:12px; font-family: sans-serif;}
 .plugin .wsite-header-plugin{width: 100%; height: 400px; background:transparent url(theme/default_header.jpg?1626762518) 0 50% no-repeat;background-position: center middle;}

div.paragraph ul, div.paragraph ol { padding-left: 3em !important; margin: 5px 0 !important; }
div.paragraph li { padding-left: 5px !important; margin: 3px 0 0 !important; }
div.paragraph ul, div.paragraph ul li { list-style: disc outside !important; }
div.paragraph ol, div.paragraph ol li { list-style: decimal outside !important; }
blockquote { margin: 10px 0; padding-left: 20px; border-left: 4px solid #ddd; font-style: italic; line-height: 170%; 
  
`;

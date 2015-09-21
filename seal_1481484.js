
dt_ua=navigator.userAgent.toLowerCase();dt_msg="Click to See Certificate";dt_rcm="This image is copyrighted. Click to view certificate.";dt_isop=(dt_ua.indexOf("opera")!=-1);dt_isie=(dt_ua.indexOf("msie")!=-1);dt_bma=parseInt(navigator.appVersion);dt_localtest=document.location.host=="localhost:55031";dt_si="doctortrusted.org/";dt_hn=window.location.hostname;dt_ph=screen.height-120;if(screen!=null)if(screen.height<670)dt_ph=screen.height-70;dt_ws="status=1,location=0,scrollbars=1,resizeable=yes,width=468,height="+dt_ph;dt_w=null;var dt_ver=-1;var dt_re=new RegExp("msie ([0-9]{1,}[\.0-9]{0,})");if(dt_re.exec(dt_ua)!=null)
dt_ver=parseFloat(RegExp.$1);if(dt_ver>0)dt_bma=dt_ver;function dt_sp(dt_rsip){dt_w=window.open(dt_rsip,'dt_SIP',dt_ws);if((dt_w!=null)&&(!dt_isie||(dt_bma>=5)))dt_w.focus();}
function dt_dc(e){if(dt_isop||document.addEventListener){var eit=(e.target.name=="_dt_seal");if(eit){if(e.which==3){}}}
else if(document.captureEvents){var tgt=e.target.toString();var eit=(tgt.indexOf(dt_s)!=-1);if(eit){if(e.which==3){}}}}
function dt_md(dt_rsip){if(typeof event!='undefined'){if(event.button==2){return false;}else if(event.button==1){if(dt_isie){return true;}}}
dt_sp(dt_rsip);return false;}
function dt_onscroll(){var isiPad=navigator.userAgent.match(/iPad/i)!=null;var isiPhone=navigator.userAgent.match(/iPhone/i)!=null;var seal_width=150;var takesspace=(seal_width*100/window.innerWidth);var landscape=window.innerWidth>window.innerHeight;var max_perc=40;if(landscape)max_perc=20;if(isiPad)max_perc=25;var small_screen=window.innerWidth<600;if(small_screen&&(isiPhone||isiPad))
{var img=dt_div.children[0].children[0];img.style.width=(img.getAttribute('width')/2)+'px';img.style.height=(img.getAttribute('height')/2)+'px';}
if(takesspace>max_perc&&small_screen==false)
{dt_div.style.display='none';}
else dt_div.style.display='block';}
function dt_set_seal(dt_div,dt_seal_type,dt_seal_align,dt_seal_id,lang){if(dt_seal_type==null)dt_seal_type="medium";dt_sip=(dt_localtest?"/":"https://"+dt_si)+"certificate/"+dt_seal_id;var dt_rsip=dt_sip+"/"+lang+"?Referer="+dt_hn;dt_is=(dt_localtest?"/":"//"+dt_si)+"seal_"+dt_seal_id+"_"+lang+"_"+dt_seal_type+".png";var dt_width=120;var dt_height=77;if(dt_seal_type.indexOf('medium'==0)){dt_height=153;}
if(dt_seal_type.indexOf('small')==0){dt_height=77;}
if(dt_seal_type.indexOf('tiny')==0){dt_height=45;}
if(dt_seal_type.indexOf('wide')==0){dt_height=42;dt_width=150;}
if(dt_seal_type.indexOf('dark')==0){dt_height=68;dt_width=150;}
try
{if(document.referrer!=''&&document.referrer.indexOf(location.hostname)<0&&typeof(window.dt_r_set)==='undefined'){dt_is+="?r="+encodeURIComponent(document.referrer.replace('http://','').replace('https://','')).replace(/%/g,"PRC");window.dt_r_set=true;}}
catch(err){}
var C2V;switch(lang){case'ES':C2V='Clic para Verificar';break;case'FR':C2V='Cliquez pour v\u00e9rifier';break;case'IT':C2V='Cliccare per verificare';break;case'DE':C2V='Klicken Sie hier um zu best\u00e4tigen';break;case'PT':C2V='Clique para Verificar';break;default:C2V='Click to Verify';}
var href=dt_rsip;if(typeof(woopra)=='object')href='';var dt_html='';if(dt_isie&&(dt_bma<=4)){dt_html=("<A style='outline: none' TABINDEX=\"-1\" HREF=\""+href+"\" onmousedown=\"return dt_md('"+dt_rsip+"');\"><IMG title='"+C2V+"' NAME=\"_dt_seal\" HEIGHT=\""+dt_height+"\" WIDTH=\""+dt_width+"\" BORDER=\"0\" SRC=\""+dt_is+"\" ALT=\""+dt_msg+"\" oncontextmenu=\"return false;\"></A>");}
else if(dt_isie&&(dt_bma>=5)&&!dt_isop){dt_html=("<A style='outline: none' HREF=\"javascript:dt_sp('"+dt_rsip+"')\" TABINDEX=\"-1\" onmouseout=\"window.status='';\" onmouseover=\"this.style.cursor='hand'; window.status='"+dt_msg+"';\" onmousedown=\"return dt_md();\"><IMG  title='"+C2V+"' NAME=\"_dt_seal\" HEIGHT=\""+dt_height+"\" WIDTH=\""+dt_width+"\" BORDER=\"0\" SRC=\""+dt_is+"\" ALT=\""+dt_msg+"\" oncontextmenu=\"return false;\"></A>");}
else{dt_html=("<A style='outline:none;float:left' TABINDEX=\"-1\" HREF=\""+href+"\" onclick=\"return dt_md('"+dt_rsip+"');\" target=\"dt_SIP\"><IMG  title='"+C2V+"' NAME=\"_dt_seal\" HEIGHT=\""+dt_height+"\" WIDTH=\""+dt_width+"\" BORDER=\"0\" SRC=\""+dt_is+"\" ALT=\""+dt_msg+"\" oncontextmenu=\"return false;\"></A>");}
if(navigator.userAgent.toLowerCase().indexOf('firefox')>-1)
{dt_div.style.backgroundImage='url("'+dt_is+'")';dt_div.style.backgroundRepeat='no-repeat';}
dt_div.innerHTML=dt_html;window.dt_div=dt_div;var el=typeof(window.addEventListener)!="undefined";if(dt_seal_align=='nofloat'){dt_div.firstChild.style.float='none';}
if(dt_seal_align=='right_bottom'){dt_div.style.position='fixed';dt_div.style.zIndex=1000;dt_div.style.right='0px';dt_div.style.bottom='0px';if(el)window.addEventListener('scroll',dt_onscroll,false);}
else
if(dt_seal_align=='left_bottom'){dt_div.style.position='fixed';dt_div.style.zIndex=1000;dt_div.style.left='0px';dt_div.style.bottom='0px';if(el)window.addEventListener('scroll',dt_onscroll,false);}
else
if(dt_seal_align=='left_top'){dt_div.style.position='fixed';dt_div.style.zIndex=1000;dt_div.style.left='0px';dt_div.style.top='0px';if(el)window.addEventListener('scroll',dt_onscroll,false);}
else
if(dt_seal_align=='right_top'){dt_div.style.position='fixed';dt_div.style.zIndex=1000;dt_div.style.right='0px';dt_div.style.top='0px';if(el)window.addEventListener('scroll',dt_onscroll,false);}
dt_onscroll();}
if(document.addEventListener){document.addEventListener('mouseup',dt_dc,true);}
(function(){var getElementsByClassName=function(className,tag,elm){if(document.getElementsByClassName){getElementsByClassName=function(className,tag,elm){elm=elm||document;var elements=elm.getElementsByClassName(className),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElements=[],current;for(var i=0,il=elements.length;i<il;i+=1){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current);}}
return returnElements;};}
else if(document.evaluate){getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=(document.documentElement.namespaceURI===xhtmlNamespace)?xhtmlNamespace:null,returnElements=[],elements,node;for(var j=0,jl=classes.length;j<jl;j+=1){classesToCheck+="[contains(concat(' ', @class, ' '), ' "+classes[j]+" ')]";}
try{elements=document.evaluate(".//"+tag+classesToCheck,elm,namespaceResolver,0,null);}
catch(e){elements=document.evaluate(".//"+tag+classesToCheck,elm,null,0,null);}
while((node=elements.iterateNext())){returnElements.push(node);}
return returnElements;};}
else{getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck=[],elements=(tag==="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag),current,returnElements=[],match;for(var k=0,kl=classes.length;k<kl;k+=1){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"));}
for(var l=0,ll=elements.length;l<ll;l+=1){current=elements[l];match=false;for(var m=0,ml=classesToCheck.length;m<ml;m+=1){match=classesToCheck[m].test(current.className);if(!match){break;}}
if(match){returnElements.push(current);}}
return returnElements;};}
return getElementsByClassName(className,tag,elm);};var divs=getElementsByClassName('doctor_trusted','div');function ShowSeals(){if(typeof dt_run_only_once=="undefined"){dt_run_only_once=true;if(divs.length==0)divs=getElementsByClassName('doctor_trusted','div');for(var i=0;i<divs.length;i++){var d=divs[i];var dt_seal_type=d.getAttribute('data-seal_type');var dt_seal_align=d.getAttribute('data-seal_align');var dt_sid=d.getAttribute('data-dt_seal_id');var lang=d.getAttribute('data-lang');if(lang==null||lang=='')lang='EN';if(dt_sid==null||dt_sid=='')dt_sid=dt_seal_id;dt_set_seal(d,dt_seal_type,dt_seal_align,dt_sid,lang);}}}
if(divs.length>0)ShowSeals(divs);else{if(window.addEventListener){window.addEventListener('load',ShowSeals,false);}
else{window.attachEvent('onload',ShowSeals);}}})();
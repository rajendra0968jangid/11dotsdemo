(function($){'use strict';$(document).ready(function(){jQuery('.angro-header-searchform input#keyword').on('blur',function(){jQuery('#datafetch').removeClass('focus');}).on('focus',function(){jQuery('#datafetch').addClass('focus');});if(jQuery(".slider-moving").length){var scrollSpeed=60;var step=1;var current=0;var imageWidth=3473;var headerWidth=1170;var restartPosition=-(imageWidth-headerWidth);function scrollBg(){current+=step;if(current==restartPosition){current=0;}
jQuery('.slider-moving').css("background-position",current+"px 0");}
setInterval(scrollBg,scrollSpeed);}
var ModalEffects=(function(){function init_modal(){var overlay=document.querySelector('.modeltheme-overlay');var overlay_inner=document.querySelector('.modeltheme-overlay-inner');var modal_holder=document.querySelector('.modeltheme-modal-holder');var html=document.querySelector('html');[].slice.call(document.querySelectorAll('.modeltheme-trigger')).forEach(function(el,i){var modal=document.querySelector('#'+el.getAttribute('data-modal')),close=modal.querySelector('.modeltheme-close');function removeModal(hasPerspective){classie.remove(modal,'modeltheme-show');classie.remove(modal_holder,'modeltheme-show');classie.remove(html,'modal-open');if(hasPerspective){classie.remove(document.documentElement,'modeltheme-perspective');}}
function removeModalHandler(){removeModal(classie.has(el,'modeltheme-setperspective'));}
el.addEventListener('click',function(ev){classie.add(modal,'modeltheme-show');classie.add(modal_holder,'modeltheme-show');classie.add(html,'modal-open');overlay.removeEventListener('click',removeModalHandler);overlay.addEventListener('click',removeModalHandler);overlay_inner.removeEventListener('click',removeModalHandler);overlay_inner.addEventListener('click',removeModalHandler);if(classie.has(el,'modeltheme-setperspective')){setTimeout(function(){classie.add(document.documentElement,'modeltheme-perspective');},25);}});});}
if(!jQuery("body").hasClass("login-register-page")){init_modal();}})();jQuery('.angro_datetime_picker').each(function(){jQuery(this).datetimepicker({format:'Y-m-d H:i',});});jQuery('.widget_categories li .children').each(function(){jQuery(this).parent().addClass('cat_item_has_children');});jQuery('.widget_nav_menu li a').each(function(){if(jQuery(this).text()==''){jQuery(this).parent().addClass('link_missing_text');}});jQuery('.auction-checkbox .angro_is_auction').on("click",function(){if(jQuery('.auction-checkbox .angro_is_auction').is(':checked')){jQuery(".angro-auction-settings").show();}else{jQuery(".angro-auction-settings").hide();}});jQuery('#product_type').on('change',function(){var product_type_value=jQuery(this).val();if(product_type_value=='auction'){jQuery(".angro-auction-settings").show();}else{jQuery(".angro-auction-settings").hide();}});if(jQuery(".single .grouped_form").length){if(jQuery(".single .wishlist-container").length){jQuery(".single .wishlist-container").insertAfter(".single_add_to_cart_button");}}
jQuery('#register .show_if_seller input').each(function(){jQuery(this).prop('disabled',true);});jQuery('#register .user-role input[value="customer"]').click(function(){if(jQuery(this).is(':checked')){jQuery('#register .show_if_seller').hide();jQuery('#register .show_if_seller input').each(function(){jQuery(this).prop('disabled',true);});}});jQuery('#register .user-role input[value="seller"]').click(function(){if(jQuery(this).is(':checked')){jQuery('#register .show_if_seller').show();jQuery('.modeltheme-modal.modeltheme-show').css("top","75%");jQuery('#register .show_if_seller input').each(function(){jQuery(this).prop('disabled',false);});}});jQuery(function(){if(jQuery("body").hasClass("woocommerce-js")){jQuery('.products li.product .archive-product-title a').matchHeight({byRow:true});jQuery('.products li.product .price').matchHeight({byRow:true});jQuery('.modeltheme-archive-product-title').matchHeight({byRow:true});}});jQuery("#modal-log-in #loginform").validate({rules:{log:{required:true,minlength:2},pwd:{required:true,}},messages:{log:{required:"Please enter your username",},pwd:{required:"Please enter your password",},},});jQuery("#contact_form").validate({rules:{user_name:{required:true,minlength:2},user_message:{required:true,minlength:10},user_subject:{required:true,minlength:5},user_email:{required:true,email:true}},messages:{user_name:{required:"Please enter a name",minlength:"Your name must consist of at least 2 characters"},user_message:{required:"Please enter a message",minlength:"Your message must consist of at least 10 characters"},user_subject:{required:"Please provide a subject",minlength:"Your subject must be at least 5 characters long"},user_email:"Please enter a valid email address"},submitHandler:function(){jQuery('#contact_form').ajaxSubmit();jQuery('.success_message').fadeIn('slow');}});jQuery(function(){if(jQuery('body').hasClass('is_nav_sticky')){jQuery(window).resize(function(){if(jQuery(window).width()<=768){}else{jQuery("#angro-main-head").sticky({topSpacing:0});}});if(jQuery(window).width()>=768){jQuery("#angro-main-head").sticky({topSpacing:0});}}});(function(){[].slice.call(document.querySelectorAll(".mt-tabs .tabs")).forEach(function(el){new CBPFWTabs(el);});})();jQuery('.cart-contents').hover(function(){jQuery('.header_mini_cart').addClass('visible_cart');},function(){jQuery('.header_mini_cart').removeClass('visible_cart');});jQuery('.menu-product-cart').hover(function(){jQuery('.header_mini_cart').addClass('visible_cart');},function(){jQuery('.header_mini_cart').removeClass('visible_cart');});jQuery('.shop_cart').hover(function(){jQuery('.header_mini_cart').addClass('visible_cart');},function(){jQuery('.header_mini_cart').removeClass('visible_cart');});jQuery('.header_mini_cart').hover(function(){jQuery(this).addClass('visible_cart');},function(){jQuery(this).removeClass('visible_cart');});if(jQuery(".woocommerce_categories").length){jQuery('.woocommerce_categories').each(function(){jQuery(this).find('.products_category .products_by_category:first').addClass("active");jQuery(this).find('.categories_shortcode .category:first').addClass("active");var selectShortcode=jQuery(this).attr('id');jQuery(this).find(".category a").click(function(){var attr=jQuery(this).attr("class");jQuery('#'+selectShortcode).find(".products_by_category").removeClass("active");jQuery(attr).addClass("active");jQuery('#'+selectShortcode).find('.category').removeClass("active");jQuery(this).parent().addClass("active");});});}
var Accordion=function(el,multiple){this.el=el||{};this.multiple=multiple||false;var links=this.el.find('.link');links.on('click',{el:this.el,multiple:this.multiple},this.dropdown)}
Accordion.prototype.dropdown=function(e){var $el=e.data.el;$this=jQuery(this),$next=$this.next();$next.slideToggle();$this.parent().toggleClass('open');if(!e.data.multiple){$el.find('.bot_nav_cat_wrap').not($next).slideUp().parent().removeClass('open');};}
var accordion=new Accordion(jQuery('#accordion'),false);if(jQuery("#angro-search").length){new UISearch(document.getElementById('angro-search'));}
jQuery(function($){if(!String.prototype.getDecimals){String.prototype.getDecimals=function(){var num=this,match=(''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!match){return 0;}
return Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0));}}
$(document.body).on('click','.plus, .minus',function(){var $qty=$(this).closest('.quantity').find('.qty'),currentVal=parseFloat($qty.val()),max=parseFloat($qty.attr('max')),min=parseFloat($qty.attr('min')),step=$qty.attr('step');if(!currentVal||currentVal===''||currentVal==='NaN')currentVal=0;if(max===''||max==='NaN')max='';if(min===''||min==='NaN')min=0;if(step==='any'||step===''||step===undefined||parseFloat(step)==='NaN')step=1;if($(this).is('.plus')){if(max&&(currentVal>=max)){$qty.val(max);}else{$qty.val((currentVal+parseFloat(step)).toFixed(step.getDecimals()));}}else{if(min&&(currentVal<=min)){$qty.val(min);}else if(currentVal>0){$qty.val((currentVal-parseFloat(step)).toFixed(step.getDecimals()));}}
$qty.trigger('change');});});jQuery(".testimonials-container").owlCarousel({navigation:true,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,2],[1200,2],[1400,2],[1600,2]]});jQuery(".testimonials-container-1").owlCarousel({navigation:false,navigationText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],pagination:false,autoPlay:true,slideSpeed:400,paginationSpeed:400,itemsCustom:[[0,1],[450,1],[600,1],[700,1],[1000,1],[1200,2],[1400,2],[1600,2]]});jQuery(".testimonials-container-2").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,1],[700,1],[1000,1],[1200,2],[1400,2],[1600,2]]});jQuery(".testimonials-container-3").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,3],[1200,3],[1400,3],[1600,3]]});jQuery(".modeltheme_products_carousel").owlCarousel({navigation:true,pagination:false,autoPlay:true,slideSpeed:700,paginationSpeed:700,navigationText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],itemsCustom:[[0,1],[450,2],[600,2],[700,4],[1000,4],[1200,4],[1400,4],[1600,4]]});jQuery(".portfolio_thumbnails_slider").owlCarousel({navigation:true,pagination:true,autoPlay:false,slideSpeed:700,paginationSpeed:700,navigationText:["",""],singleItem:true});jQuery(".post_thumbnails_slider").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,singleItem:true});var owl=jQuery(".post_thumbnails_slider");jQuery(".next").click(function(){owl.trigger('owl.next');})
jQuery(".prev").click(function(){owl.trigger('owl.prev');})
jQuery(".testimonials_slider").owlCarousel({navigation:false,pagination:true,autoPlay:false,slideSpeed:700,paginationSpeed:700,singleItem:true});jQuery(".related-clients").owlCarousel({navigation:false,navigationText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],pagination:false,autoPlay:true,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,3],[600,3],[700,6],[1000,6],[1200,6],[1400,6],[1600,6]]});jQuery('.animateIn').animateIn();var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=jQuery('.back-to-top');jQuery(window).scroll(function(){(jQuery(this).scrollTop()>offset)?$back_to_top.addClass('angro-is-visible'):$back_to_top.removeClass('angro-is-visible angro-fade-out');if(jQuery(this).scrollTop()>offset_opacity){$back_to_top.addClass('angro-fade-out');}});$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});jQuery('.statistics').appear(function(){jQuery('.percentage').each(function(){var dataperc=jQuery(this).attr('data-perc');jQuery(this).find('.skill-count').delay(6000).countTo({from:0,to:dataperc,speed:5000,refreshInterval:100});});});var ModalEffects=(function(){function init_modal(){var overlay=document.querySelector('.modeltheme-overlay');[].slice.call(document.querySelectorAll('.modeltheme-trigger')).forEach(function(el,i){var modal=document.querySelector('#'+el.getAttribute('data-modal')),close=modal.querySelector('.modeltheme-close');function removeModal(hasPerspective){classie.remove(modal,'modeltheme-show');if(hasPerspective){classie.remove(document.documentElement,'modeltheme-perspective');}}
function removeModalHandler(){removeModal(classie.has(el,'modeltheme-setperspective'));}
el.addEventListener('click',function(ev){classie.add(modal,'modeltheme-show');overlay.removeEventListener('click',removeModalHandler);overlay.addEventListener('click',removeModalHandler);if(classie.has(el,'modeltheme-setperspective')){setTimeout(function(){classie.add(document.documentElement,'modeltheme-perspective');},25);}});});}
if(!jQuery("body").hasClass("login-register-page")){init_modal();}})();jQuery("#dropdown-user-profile").on("hover",function(e){if(jQuery(this).hasClass("open")){jQuery(this).removeClass("open");}else{jQuery(this).addClass("open");}});jQuery("#member_hover").on("hover",function(e){if(jQuery(this).hasClass("open")){jQuery(this).removeClass("open");}else{jQuery(this).addClass("open");}});jQuery('.mt-search-icon').on("click",function(){jQuery('.fixed-search-overlay').toggleClass('visible');});jQuery('.fixed-search-overlay .icon-close').on("click",function(){jQuery('.fixed-search-overlay').removeClass('visible');});jQuery(document).keyup(function(e){if(e.keyCode==27){jQuery('.fixed-search-overlay').removeClass('visible');jQuery('.fixed-sidebar-menu').removeClass('open');jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');}});jQuery('#DataTable-icondrops-active').dataTable({responsive:true,"columns":[{"sortable":false},{"sortable":true},{"sortable":false},{"sortable":true},{"sortable":true},{"sortable":false},{"sortable":false}],"aoColumnDefs":[{"sType":"numeric"}],language:{searchPlaceholder:"Search "},});jQuery("#modal-log-in #register-modal").on("click",function(){jQuery("#login-modal-content").fadeOut("fast",function(){jQuery("#signup-modal-content").fadeIn(500);});});jQuery("#modal-log-in .btn-login-p").on("click",function(){jQuery("#signup-modal-content").fadeOut("fast",function(){jQuery("#login-modal-content").fadeIn(500);});});jQuery("#login-content-shortcode .btn-register-shortcode").on("click",function(){jQuery("#login-content-shortcode").fadeOut("fast",function(){jQuery("#register-content-shortcode").fadeIn(500);});});jQuery('#nav-menu-login').on("click",function(){jQuery(".modeltheme-show ~ .modeltheme-overlay").on("click",function(){jQuery("#signup-modal-content").fadeOut("fast");jQuery("#login-modal-content").fadeIn(500);});});var baseUrl=document.location.origin;if($(window).width()<768){jQuery("#dropdown-user-profile").on("click",function(){window.location.href=(baseUrl+'/my-account');});}
jQuery('#product-type').change(function(){if(jQuery(this).val()=="auction"){jQuery('.advanced_options').show();}else{jQuery('.advanced_options').hide();}});if(jQuery('#yith-wcwl-popup-message').length==0){var message_div=jQuery('<div>').attr('id','yith-wcwl-message'),popup_div=jQuery('<div>').attr('id','yith-wcwl-popup-message').html(message_div).hide();jQuery('body').prepend(popup_div);}
if(jQuery(window).width()<=991){jQuery(".footer-row-1 .widget_text .widget").each(function(){var heading=jQuery(this).find('h3.widget-title');jQuery(heading).click(function(){jQuery(heading).toggleClass("active");var siblings=jQuery(this).nextAll();jQuery(siblings).slideToggle();})});}});}(jQuery));(function($){$(document).ready(function(){MTMobileNavigationExpand.init();});$(window).resize(function(){MTMobileNavigationExpand.init();});var MTMobileNavigationExpand={init:function(){var $nav_submenu=$(".navbar-collapse .menu-item-has-children");if($nav_submenu.length){$(function(){if(jQuery(window).width()<766){var expand='<span class="expand"><a class="action-expand"></a></span>';jQuery('.navbar-collapse .menu-item-has-children, .navbar-collapse .mega_menu').each(function(){if(!jQuery(this).find('.action-expand').length){jQuery('.navbar-collapse .menu-item-has-children, .navbar-collapse .mega_menu').append(expand);}});jQuery('#navbar .sub-menu').hide();jQuery(".menu-item-has-children .expand a").on("click",function(){jQuery(this).parent().parent().find(' > ul').toggle();jQuery(this).toggleClass("show-menu");});jQuery(".mega_menu .expand a").on("click",function(){jQuery(this).parent().parent().find(' > .cf-mega-menu').toggle();jQuery(this).toggleClass("show-menu");});}});}}};})(jQuery);(function($){var openBtn=$('#navbar .bot_cat_button'),slideMenu=$('#navbar .bot_nav_cat_wrap'),headerBotClass=$('#navbar');if(jQuery(window).width()>1024){if(slideMenu.hasClass("cat_open_default")){openBtn.addClass("active");slideMenu.addClass("active");slideMenu.slideDown(300);}}else{slideMenu.slideUp(0);openBtn.removeClass("active");slideMenu.removeClass("active");}
openBtn.on("click",function(){if(slideMenu.is(':hidden')){slideMenu.slideDown(300);openBtn.addClass("active");openBtn.removeClass("close");}else{slideMenu.slideUp(300);openBtn.removeClass("active");openBtn.addClass("close");slideMenu.removeClass("active");}});})(jQuery);(function($){$(document).ready(function(){MTDefaultNavMenu.init();});$(window).resize(function(){MTDefaultNavMenu.init();});var MTDefaultNavMenu={init:function(){var $menuItems=$('#navbar ul.menu > li.menu-item-has-children');if($menuItems.length){$menuItems.each(function(i){var thisItem=$(this),menuItemPosition=thisItem.offset().left,dropdownMenuItem=thisItem.find(' > ul'),dropdownMenuWidth=dropdownMenuItem.outerWidth(),menuItemFromLeft=$(window).width()-menuItemPosition;var dropDownMenuFromLeft;if(thisItem.find('li.menu-item-has-children').length>0){dropDownMenuFromLeft=menuItemFromLeft-dropdownMenuWidth;}
dropdownMenuItem.removeClass('mt-drop-down--right');if(menuItemFromLeft<dropdownMenuWidth||dropDownMenuFromLeft<dropdownMenuWidth){dropdownMenuItem.addClass('mt-drop-down--right');}});}}};})(jQuery);(function($){$(document).ready(function(){MTShopQtyBox.init();});var MTShopQtyBox={init:function(){var shopQtyBox=$('.products .quantity .qty');if(shopQtyBox.length){shopQtyBox.on("change paste keyup",function(){var thisItem=$(this);$("body").on("change input",thisItem,function(){var add_to_cart_button=$(this).parent().parent().find(".add_to_cart_button");var qty_value_selector=thisItem.val();if(isNaN(qty_value_selector)){qty_value_selector=1;}else{qty_value_selector=qty_value_selector;}
var qty_value=parseInt(qty_value_selector);add_to_cart_button.attr("data-quantity",qty_value);add_to_cart_button.attr("data-quantity",qty_value);});});}}};})(jQuery);
jQuery(document).ready(function(jQuery){jQuery('.bitwallet-single-point').children('a').on('click',function(){var selectedPoint=jQuery(this).parent('li');if(selectedPoint.hasClass('is-open')){selectedPoint.removeClass('is-open').addClass('visited');}else{selectedPoint.addClass('is-open').siblings('.bitwallet-single-point').removeClass('is-open');}});jQuery('.bitwallet-close-info').on('click',function(event){event.preventDefault();jQuery(this).parents('.bitwallet-single-point').eq(0).removeClass('is-open').addClass('visited');});});
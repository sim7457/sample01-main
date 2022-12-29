$(function () {

    // top banner

    const topBammerLInk = $('.top_banner i');
    topBannerClose = () => {
        $('.top_banner').addClass('on');
    }
    topBammerLInk.on('click', topBannerClose);

    // mainSlide  

    const mainSlideItm = $('.main_slide');
    const slideMainEvent = (e, s, c) => {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(c ? (c + 1) : 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
    }

    const slideDefaultOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    }

    mainSlideItm.on('init', slideMainEvent);
    const mainSlide = mainSlideItm.slick({ ...slideDefaultOption, autoplaySpeed: 4000 });
    mainSlide.on('afterChange', slideMainEvent);

    const slideLeftArrow = $('.mainVisual .left_arrow');
    const slideRightArrow = $('.mainVisual .right_arrow');

    slideLeftArrow.on('click', () => { mainSlide.slick('slickPrev') });
    slideRightArrow.on('click', () => { mainSlide.slick('slickNext') });

    const slideDots = $('.mainVisual .main_slide_dots button');

    slideDotsLink = e => {
        const target = e.target;
        const idx = $(target).parent().index();
        //const idx = $(this).parent().index();
        mainSlide.slick('slickGoTo', idx);
    }

    slideDots.on('click', slideDotsLink);









});
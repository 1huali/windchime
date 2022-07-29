class Media {
    constructor(matchMedia, id) {
        this.matchMedia = matchMedia;
        this.id = id;
    }
}

class MediaController {
    constructor(medias, pageElementList) {
        this.medias = medias;
        this.currentMedia;
        this.previousMedia;
        this.pageElementList = pageElementList;
        this.__setInitialiseMedias(medias);
    }

    __setElementsMedia = (pageElementList) => {
        pageElementList.forEach(element => {
            element.controller.currentMedia = this.currentMedia;
            element.controller.previousMedia = this.previousMedia;
            element.controller.manageResizing();
        });
    }

    __setInitialiseMedias = (medias) => {
        for (const [key, mediaObject] of Object.entries(medias)) {
            if (mediaObject) {
                mediaObject.matchMedia.addEventListener('change', () => {
                    this.setMedia(mediaObject);
                });
                this.setMedia(mediaObject);
            }
        }
    }

    setMedia = (media) => {
        if (media.matchMedia.matches) {
            let tempMedia = this.currentMedia;
            this.currentMedia = media.id;
            this.previousMedia = tempMedia;
            // this.__setElementsMedia(this.pageElementList);
        }
    }

    __isDesktop = () => {
        return this.currentMedia === DESKTOP_MEDIA;
    }

    get mediasStatus() {
        return [this.currentMedia, this.previousMedia];
    }
}

let isMobile = window.matchMedia("(max-width: " + (MOBILLE - 1) + "px)");
let mobileMedia = new Media(isMobile, MOBILE_MEDIA);
let isSmallTabletOrLess = window.matchMedia("(max-width: " + (SMALLTABLET - 1) + "px)");
let SmallTabletOrLessMedia = new Media(isSmallTabletOrLess, SMALL_TABLET_OR_LESS_MEDIA);
let isSmallTablet = window.matchMedia("(min-width: " + MOBILLE + "px) and (max-width: " + (SMALLTABLET - 1) + "px)");
let smallTabletMedia = new Media(isSmallTablet, SMALL_TABLET_MEDIA);
let isTablet = window.matchMedia("(min-width: " + SMALLTABLET + "px) and (max-width: " + (DESKTOP - 1) + "px)");
let tabletMedia = new Media(isTablet, TABLET_MEDIA);
let isTabletOrLess = window.matchMedia("(max-width: " + DESKTOP + "px)");
let tabletOrLessMedia = new Media(isTabletOrLess, TABLET_OR_LESS_MEDIA);
let isLargeTablet = window.matchMedia("(min-width: " + LARGETABLET + "px) and (max-width: " + (DESKTOP - 1) + "px)");
let largeTabletMedia = new Media(isLargeTablet, LARGE_TABLET_MEDIA);
let isDesktop = window.matchMedia("(min-width: " + DESKTOP + "px)");
let desktopMedia = new Media(isDesktop, DESKTOP_MEDIA);
let medias = {
    [mobileMedia.id]: mobileMedia,
    [smallTabletMedia.id]: smallTabletMedia,
    [largeTabletMedia.id]: largeTabletMedia,
    [tabletMedia.id]: tabletMedia,
    [desktopMedia.id]: desktopMedia,
}

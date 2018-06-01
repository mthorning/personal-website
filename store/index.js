import Vuex from 'vuex';
import GalleryConfig from '~/assets/js/gallery-config.js';
import PageMap from '~/assets/js/page-map.js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      images: GalleryConfig.images,
      portraitImages: [],
      pages: PageMap.pages
    },
    getters: {
      getImage: state => id => {
        if (id) {
          return state.images.find(img => img.id === id) || false;
        }
        return state.images;
      },
      getImageTitle: (state, getters) => id => {
        const image = getters.getImage(id);
        if (image) {
          return image.path
            .split('/')
            .pop()
            .split('.')[0]
            .split('_')
            .join(' ');
        }
        return false;
      },
      isPortrait: state => id => {
        return state.portraitImages.includes(id);
      },
      getPage: state => path => {
        if (path) {
          return state.pages.find(page => page.path === path);
        }
        return false;
      }
    },
    mutations: {
      addPortrait(state, id) {
        state.portraitImages.push(id);
      }
    }
  });
};

export default createStore;

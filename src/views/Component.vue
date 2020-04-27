<template lang="pug">
  .component
    header.header(:class="`header-${$route.query.ind}`")
      .header__text
        h2.header__title {{ $route.query.name }}
        .header__subtitle {{ $route.query.engName }}
    .component-section
      GrCalendar#calendar(v-if="$route.query.engName === 'calendar'", :gr-calendar-config="calendarConfig", v-model="calendarDate")
      .gr-slider-wrapper#gr-slider-wrapper(v-if="$route.query.engName === 'slider'")
        .gr-slider-container#gr-slider-container
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/ablefor.jpg", alt="Image")
              .gr-slider-item__title Эублефар
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/dog.jpg", alt="Image")
              .gr-slider-item__title Австралийская овчарка
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/parrot.jpg", alt="Image")
              .gr-slider-item__title Попугай Корелла
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/duck.jpg", alt="Image")
              .gr-slider-item__title Утка
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/packbot.jpg", alt="Image")
              .gr-slider-item__title Малый поясохвост
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/hedgehog.jpg", alt="Image")
              .gr-slider-item__title Ёж
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/cat.jpg", alt="Image")
              .gr-slider-item__title Кот
      GrCheckboxes(v-if="$route.query.engName === 'checkboxes'", :gr-checkboxes-config="checkboxesConfig", v-model="chosenCheckboxes")
      GrRadiobuttons(v-if="$route.query.engName === 'radiobuttons'", :gr-radiobuttons-config="radiobuttonsConfig", v-model="chosenRadiobutton")
      GrMenu(v-if="$route.query.engName === 'menu'", :gr-menu-config="menuConfig")
      .gr-modals(v-if="$route.query.engName === 'modal'")
        GrModal#modal-alert(:gr-modal-config="modalAlertConfig")
        GrModal#modal-confirm(:gr-modal-config="modalConfirmConfig", v-model="modalConfirmed")
        GrModal#modal-input(:gr-modal-config="modalInputConfig", v-model="modalInput")
      .gr-selects(v-if="$route.query.engName === 'select'")
        GrSelect#select-single(:gr-select-config="selectSingleConfig", v-model="selectSingle")
        GrSelect#select-multiple(:gr-select-config="selectMultipleConfig", v-model="selectMultiple")
        GrSelect#select-items-multiple(:gr-select-config="selectItemsMultipleConfig", v-model="selectItemsMultiple")
      .gr-tabs#gr-tabs(v-if="$route.query.engName === 'tabs'")
        .gr-tabs-nav
          button.gr-tabs-nav__item Текст 1
          button.gr-tabs-nav__item Текст с картинкой
          button.gr-tabs-nav__item Текст 2
          button.gr-tabs-nav__item Текст с видео
          button.gr-tabs-nav__item Текст 3
        .gr-tabs-content
          .gr-tabs-content__item
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat. Amet cursus sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus.
          .gr-tabs-content__item
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            img(src="https://www.culture.ru/storage/images/8ba9d7a028dfc838942957ef12f67936/8234d8564039f6a12306998f9f61eac5.jpg", alt="Image")
          .gr-tabs-content__item
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis.
          .gr-tabs-content__item
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet.
            iframe(width="560", height="315", src="https://www.youtube.com/embed/OiLdgNA6hlM", frameborder="0", allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
          .gr-tabs-content__item
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat. Amet cursus sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus.
            p Elit sed vulputate mi sit amet mauris commodo. Sed risus pretium quam vulputate dignissim. Eu non diam phasellus vestibulum lorem sed risus. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer. Amet commodo nulla facilisi nullam. Non tellus orci ac auctor augue mauris augue neque. Curabitur gravida arcu ac tortor dignissim convallis. Libero volutpat sed cras ornare. Cursus risus at ultrices mi tempus imperdiet. Arcu non sodales neque sodales ut etiam. Dolor purus non enim praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Non odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in.
      .gr-accordion#gr-accordion(v-if="$route.query.engName === 'accordion'")
        .gr-accordion-item
          button.gr-accordion-item__title Текст 1
          .gr-accordion-item__wrapper
            .gr-accordion-item__content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat. Amet cursus sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus.
        .gr-accordion-item
          button.gr-accordion-item__title Текст с картинкой
          .gr-accordion-item__wrapper
            .gr-accordion-item__content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
              img(src="https://www.culture.ru/storage/images/8ba9d7a028dfc838942957ef12f67936/8234d8564039f6a12306998f9f61eac5.jpg", alt="Image")
        .gr-accordion-item
          button.gr-accordion-item__title Текст 2
          .gr-accordion-item__wrapper
            .gr-accordion-item__content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis.
        .gr-accordion-item
          button.gr-accordion-item__title Текст с видео
          .gr-accordion-item__wrapper
            .gr-accordion-item__content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet.
              iframe(width="560", height="315", src="https://www.youtube.com/embed/OiLdgNA6hlM", frameborder="0", allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
        .gr-accordion-item
          button.gr-accordion-item__title Текст 3
          .gr-accordion-item__wrapper
            .gr-accordion-item__content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat. Amet cursus sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus.
              p Elit sed vulputate mi sit amet mauris commodo. Sed risus pretium quam vulputate dignissim. Eu non diam phasellus vestibulum lorem sed risus. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer. Amet commodo nulla facilisi nullam. Non tellus orci ac auctor augue mauris augue neque. Curabitur gravida arcu ac tortor dignissim convallis. Libero volutpat sed cras ornare. Cursus risus at ultrices mi tempus imperdiet. Arcu non sodales neque sodales ut etiam. Dolor purus non enim praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Non odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in.
      .gr-preloader-wrapper(v-if="$route.query.engName === 'preloader'")
        button.gr-preloader-button(@click="showPreloader") Показать анимацию загрузки
        .gr-preloader#gr-preloader
      .gr-notification-wrapper(v-if="$route.query.engName === 'notification'")
        button.gr-notification-button(@click="showNotification('info')") Показать информационное уведомление
        GrNotification#gr-notification-info(:gr-notification-config="notificationInfoConfig")
        button.gr-notification-button(@click="showNotification('success')") Показать уведомление успеха
        GrNotification#gr-notification-success(:gr-notification-config="notificationSuccessConfig")
        button.gr-notification-button(@click="showNotification('error')") Показать уведомление ошибки
        GrNotification#gr-notification-error(:gr-notification-config="notificationErrorConfig")
      .gr-drawer-wrapper(v-if="$route.query.engName === 'drawer'")
        GrDrawer.gr-drawer#gr-drawer(:gr-drawer-config="drawerConfig")
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet consectetur adipiscing elit duis tristique sollicitudin. Amet est placerat in egestas erat. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Amet venenatis urna cursus eget nunc scelerisque viverra. Faucibus purus in massa tempor nec feugiat. Lobortis mattis aliquam faucibus purus in massa tempor nec. Fames ac turpis egestas maecenas pharetra convallis. Elementum nisi quis eleifend quam. Feugiat scelerisque varius morbi enim nunc. Quisque id diam vel quam elementum pulvinar etiam non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sem nulla pharetra diam sit. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Donec ultrices tincidunt arcu non sodales. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat. Amet cursus sit amet dictum sit amet justo donec enim. Congue quisque egestas diam in arcu cursus.
        p Elit sed vulputate mi sit amet mauris commodo. Sed risus pretium quam vulputate dignissim. Eu non diam phasellus vestibulum lorem sed risus. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Nisl suscipit adipiscing bibendum est ultricies integer. Amet commodo nulla facilisi nullam. Non tellus orci ac auctor augue mauris augue neque. Curabitur gravida arcu ac tortor dignissim convallis. Libero volutpat sed cras ornare. Cursus risus at ultrices mi tempus imperdiet. Arcu non sodales neque sodales ut etiam. Dolor purus non enim praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Non odio euismod lacinia at quis risus sed vulputate odio. Ac odio tempor orci dapibus ultrices in.
    Footer
</template>

<script>
import GrCalendar from '@/components/GrCalendar.vue'
import GrCheckboxes from '@/components/GrCheckboxes.vue'
import GrRadiobuttons from '@/components/GrRadiobuttons.vue'
import GrMenu from '@/components/GrMenu.vue'
import GrModal from '@/components/GrModal.vue'
import GrSelect from '@/components/GrSelect.vue'
import GrNotification from '@/components/GrNotification.vue'
import GrDrawer from '@/components/GrDrawer.vue'
import Footer from '@/components/Footer.vue'

import '../assets/slider/GrSlider.styl'
import { GrSlider } from '@/assets/slider/GrSlider.js'

import '../assets/tabs/GrTabs.styl'
import { GrTabs } from '@/assets/tabs/GrTabs.js'

import '../assets/accordion/GrAccordion.styl'
import { GrAccordion } from '@/assets/accordion/GrAccordion.js'

import '../assets/preloader/GrPreloader.styl'
import { GrPreloader } from '@/assets/preloader/GrPreloader.js'

export default {
  name: 'GrComponent',
  components: {
    GrCalendar,
    GrCheckboxes,
    GrRadiobuttons,
    GrMenu,
    GrModal,
    GrSelect,
    GrNotification,
    GrDrawer,
    Footer
  },
  data() {
    return {
      calendarConfig: {
        monthsDictionary: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        weekdaysDictionary: ['Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'],
        separator: '/',
        disabledWeekdays: ['Вос', 'Вто'],
        disabledDaysBefore: '10/03/2020',
        disabledDaysAfter: '15/05/2020'
      },
      calendarDate: '',
      sliderConfig: {
        containerId: 'slider-container',
        arrows: true,
        navButtons: true
      },
      checkboxesConfig: {
        values: ['Чекбокс 1', 'Чекбокс 2', 'Чекбокс 3'],
        keys: ['chb1', 'chb2', 'chb3']
      },
      chosenCheckboxes: [],
      radiobuttonsConfig: {
        values: ['Переключатель 1', 'Переключатель 2', 'Переключатель 3'],
        keys: ['rb1', 'rb2', 'rb3']
      },
      chosenRadiobutton: '',
      menuConfig: {
        items: [{
          link: {
            path: '/component',
            query: { engName: 'menu', name: 'меню', ind: '1' }
          },
          title: 'Главная'
        }, {
          link: {
            path: '/component',
            query: { engName: 'menu', name: 'меню', ind: '2' }
          },
          title: 'О нас'
        }, {
          link: {
            path: '/component',
            query: { engName: 'menu', name: 'меню', ind: '3' }
          },
          title: 'Портфолио'
        }, {
          link: {
            path: '/component',
            query: { engName: 'menu', name: 'меню', ind: '4' }
          },
          title: 'Блог'
        }, {
          link: {
            path: '/component',
            query: { engName: 'menu', name: 'меню', ind: '5' }
          },
          title: 'Контакты'
        }]
      },
      modalAlertConfig: {
        buttonTitle: 'Сообщение',
        title: 'Заголовок для модального окна',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Integer vitae justo eget magna fermentum iaculis eu non. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Ipsum consequat nisl vel pretium lectus quam id leo. Sit amet massa vitae tortor condimentum lacinia quis. Facilisis gravida neque convallis a. Nec dui nunc mattis enim ut tellus. Fames ac turpis egestas sed tempus. Vulputate ut pharetra sit amet aliquam id.'
      },
      modalConfirmConfig: {
        buttonTitle: 'Подтверждение',
        title: 'Заголовок для модального окна',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Integer vitae justo eget magna fermentum iaculis eu non. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Ipsum consequat nisl vel pretium lectus quam id leo. Sit amet massa vitae tortor condimentum lacinia quis. Facilisis gravida neque convallis a. Nec dui nunc mattis enim ut tellus. Fames ac turpis egestas sed tempus. Vulputate ut pharetra sit amet aliquam id.',
        confirmEnabled: true
      },
      modalConfirmed: false,
      modalInputConfig: {
        buttonTitle: 'Ввод',
        title: 'Заголовок для модального окна',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Integer vitae justo eget magna fermentum iaculis eu non. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Ipsum consequat nisl vel pretium lectus quam id leo. Sit amet massa vitae tortor condimentum lacinia quis. Facilisis gravida neque convallis a. Nec dui nunc mattis enim ut tellus. Fames ac turpis egestas sed tempus. Vulputate ut pharetra sit amet aliquam id.',
        inputEnabled: true
      },
      modalInput: '',
      selectSingleConfig: {
        values: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5', 'Элемент 6', 'Элемент 7', 'Элемент 8', 'Элемент 9', 'Элемент 10'],
        keys: ['el1', 'el2', 'el3', 'el4', 'el5', 'el6', 'el7', 'el8', 'el9', 'el10']
      },
      selectSingle: '',
      selectMultipleConfig: {
        isMultiple: true,
        values: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5', 'Элемент 6', 'Элемент 7', 'Элемент 8', 'Элемент 9', 'Элемент 10']
      },
      selectMultiple: [],
      selectItemsMultipleConfig: {
        isMultiple: true,
        values: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5', 'Элемент 6', 'Элемент 7', 'Элемент 8', 'Элемент 9', 'Элемент 10'],
        itemsMultiple: true,
        maxItemQuantity: 15
      },
      selectItemsMultiple: [],
      preloader: null,
      notificationInfoConfig: {
        type: 'info',
        title: 'Информация',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      notificationSuccessConfig: {
        type: 'success',
        title: 'Успех',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      notificationErrorConfig: {
        type: 'error',
        title: 'Ошибка',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      drawerConfig: {
        title: 'Выдвижное меню',
        items: [{
          link: {
            path: '/component',
            query: { engName: 'drawer', name: 'выдвижная панель', ind: '1' }
          },
          title: 'Главная'
        }, {
          link: {
            path: '/component',
            query: { engName: 'drawer', name: 'выдвижная панель', ind: '2' }
          },
          title: 'О нас'
        }, {
          link: {
            path: '/component',
            query: { engName: 'drawer', name: 'выдвижная панель', ind: '3' }
          },
          title: 'Портфолио'
        }, {
          link: {
            path: '/component',
            query: { engName: 'drawer', name: 'выдвижная панель', ind: '4' }
          },
          title: 'Блог'
        }, {
          link: {
            path: '/component',
            query: { engName: 'drawer', name: 'выдвижная панель', ind: '5' }
          },
          title: 'Контакты'
        }]
      }
    }
  },
  methods: {
    showPreloader() {
      this.preloader.showPreloader()
      setTimeout(() => { this.preloader.hidePreloader() }, 5000)
    },
    showNotification(type) {
      let notification
      if (type === 'info')
        notification = document.getElementById('gr-notification-info')
      else if (type === 'success')
        notification = document.getElementById('gr-notification-success')
      else if (type === 'error')
        notification = document.getElementById('gr-notification-error')
      notification.style.display = 'block'
      setTimeout(() => { notification.style.opacity = '1' }, 10)
      setTimeout(() => {
        notification.style.opacity = '0'
        setTimeout(() => { notification.style.display = 'none' }, 200)
      }, 5000)
    }
  },
  mounted() {
    if (this.$route.query.engName === 'slider') {
      const grSlider = new GrSlider({
        arrowsEnabled: true,
        navigationEnabled: true
      })
    }
    if (this.$route.query.engName === 'tabs') {
      const grTabs = new GrTabs({
        // layout: 'vertical'
        layout: 'horizontal'
      })
    }
    if (this.$route.query.engName === 'accordion') {
      const grAccordion = new GrAccordion({
        // isMultiple: false,
        // defaultOpened: true,
        defaultOpenedItems: [0]
      })
    }
    if (this.$route.query.engName === 'preloader') {
      this.preloader = new GrPreloader()
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.header
  display: flex
  justify-content: center
  align-items: center
  height: 288px
  padding: 25px 0
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  text-align: center
  &-1
    background-image: url('../assets/img/bg1b.jpg')
  &-2
    background-image: url('../assets/img/bg2b.jpg')
  &-3
    background-image: url('../assets/img/bg3b.jpg')
  &-4
    background-image: url('../assets/img/bg4b.jpg')
  &-5
    background-image: url('../assets/img/bg5b.jpg')
  &__title
    width: 700px
    font-weight: bold
    font-size: 64px
    text-transform: uppercase
    margin-bottom: 20px
  &__subtitle
    font-size: 24px
    letter-spacing: .25em
    text-transform: uppercase
    color: $cFontLight
  &__text
    position: relative
    z-index: 10
    &:before, &:after
      content: ''
      display: block
      position: absolute
    &:before
      bottom: -6px
      left: 50%
      transform: translateX(-50%)
      width: 800px
      height: 40px
      background-color: $cActive
      z-index: -1
    &:after
      bottom: -35px
      left: -15px
      width: 20px
      height: 200px
      background-color: $cBgDark

.component
  display: flex
  justify-content: space-between
  flex-direction: column
  width: 100%
  min-height: 100vh
  &-section
    display: flex
    justify-content: center
    align-items: center
    padding: 100px 0

.gr
  &-slider
    &-item
      display flex
      justify-content center
      align-items center
      &__wrapper
        position: relative
        height 100%
      &__img
        height 100%
        img
          height 100%
          width auto
      &__title
        position: absolute
        bottom: 0
        right: -60px
        padding: 15px 45px
        background-color: $cBgDark
        font-size: 24px
        font-weight: bold
        color $cFontLight
        text-align: center
        text-transform: uppercase
        box-shadow: -5px -5px 20px rgba(0, 0, 0, .5)
  &-modals
    display flex
    justify-content center
    align-items center
    flex-direction column
  &-selects
    display flex
    justify-content center
    align-items center
  &-tabs
    width 80%
    p
      margin-bottom 15px
      &:last-child
        margin-bottom 0
    iframe
      display block
      margin 0 auto
  &-accordion
    width 80%
    p
      margin-bottom 15px
      &:last-child
        margin-bottom 0
    iframe
      display block
      margin 0 auto
  &-preloader
    &-button
      padding 10px 20px
      background-color $cBgDark
      font-family $font
      font-weight bold
      color $cFontLight
      text-transform uppercase
      transition 0.2s
      &:hover
        padding 10px 30px
        color $cActive
  &-notification
    &-wrapper
      display flex
      justify-content center
      align-items center
      flex-direction column
    &-button
      padding 10px
      width 490px
      background-color $cBgDark
      font-family $font
      font-weight bold
      color $cFontLight
      text-transform uppercase
      margin 0 auto 20px auto
      transition 0.2s
      &:last-child
        margin-bottom 0
      &:hover
        width 510px
        color $cActive
  &-drawer
    margin-bottom 20px
    &-wrapper
      width 80%
      padding 20px 30px
      box-shadow: 0 0 20px rgba(0, 0, 0, .3)
      p
        line-height 1.5
        margin-bottom 15px
        &:last-child
          margin-bottom 0
.gr-slider-arrow
  width 100px
  height 100px
  background-color red
</style>
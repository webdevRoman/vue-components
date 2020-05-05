# Пакет кастомизируемых компонентов Vue

Для использования какого-либо компонента необходимо скачать этот компонент из данного репозитория и подключить его в вашем проекте.

В этом пакете есть как компоненты Vue, так и компоненты, для которых необходимо создать разметку самостоятельно и подключить js и css файлы. Далее в описании каждого компонента будет пометка, какого типа этот компонент (Vue или CSS + JS).

При подключении компонентов Vue из данного пакета необходимо обязательно для них задавать уникальный id!

---


## Инструкция подключения компонента Vue

1. Импортировать компонент (в script):<br>
`import GrCheckboxes from '@/components/GrCheckboxes.vue'`

2. Создать для компонента объект конфигурации (в script > data):
```
checkboxesConfig: {
  values: ['Чекбокс 1', 'Чекбокс 2', 'Чекбокс 3'],
  keys: ['chb1', 'chb2', 'chb3']
}
```
Этот объект нужно передать в props компонента при подключении.<br>
Имя props и параметры объекта конфигурации указаны в описании каждого компонента.

3. Если необходимо, создать поле для данных, которые будут выбраны в компоненте (в script > data):<br>
`chosenCheckboxes: []`

4. Подключить компонент (в template):<br>
`<gr-checkboxes id="gr-checkboxes" :gr-checkboxes-config="checkboxesConfig" v-model="chosenCheckboxes"></gr-checkboxes>`

5. При необходимости изменить стили (либо в самом компоненте, либо в любом компоненте, где в style не указан параметр scoped).

---


## Инструкция подключения компонента CSS + JS

1. Импортировать файлы (в script):
```
import '@/assets/slider/GrSlider.styl'
import { GrSlider } from '@/assets/slider/GrSlider.js'
```

2. Создать экземпляр класса компонента, передать в конструкор объект конфигурации (в script > mounted):
```
const grSlider = new GrSlider({
  arrowsEnabled: true,
  navigationEnabled: true
})
```
Параметры объекта конфигурации указаны в описании каждого компонента.

3. Создать разметку (в template). Примеры разметки для каждого компонента CSS + JS будут приведены в их описании. Структуру разметки, все классы и идентификаторы нужно сохранить, как в примере!

4. При необходимости изменить стили.

---


## Пример подключения компонентов

```
<template lang="pug">
  .component
    GrCalendar#calendar(:gr-calendar-config="calendarConfig", v-model="calendarDate")
    .gr-tabs#gr-tabs
      .gr-tabs-nav
        button.gr-tabs-nav__item Текст
        button.gr-tabs-nav__item Текст с картинкой
      .gr-tabs-content
        .gr-tabs-content__item
          p Lorem ipsum...
        .gr-tabs-content__item
          p Lorem ipsum...
          img(src="...", alt="Image")
</template>

<script>
import GrCalendar from '@/components/GrCalendar.vue'

import '@/assets/tabs/GrTabs.styl'
import { GrTabs } from '@/assets/tabs/GrTabs.js'

export default {
  name: 'GrComponent',
  components: {
    GrCalendar
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
      calendarDate: ''
    }
  },
  mounted() {
    const grTabs = new GrTabs({
      layout: 'horizontal'
    })
}
</script>
```

---


## GrCalendar (Vue)

Props конфигурации компонента - `gr-calendar-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `monthsDictionary` | Месяцы | Массив из 12 строчных элементов | `['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']` |
| `weekdaysDictionary` | Дни недели | Массив из 7 строчных элементов | `['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']` |
| `separator` | Разделитель дня, месяца и года | Строка | `'.'` |
| `disabledWeekdays` | Недоступные для выбора дни недели | Массив из 0-7 строчных элементов (указывать те же дни недели, что и в `weekdaysDictionary`) | `[]` |
| `disabledDaysBefore` | Дни, недоступные до указанного дня | `'today'` или дата (с разделителем, как в `separator`) | - |
| `disabledDaysAfter` | Дни, недоступные после указанного дня | `'today'` или дата (с разделителем, как в `separator`) | - |

Кроме объекта конфигурации необходимо создать объект для получения выбранной в календаре даты и передать его в `v-model`.

Пример подключения компонента:<br>
`GrCalendar#calendar(:gr-calendar-config="calendarConfig", v-model="calendarDate")`

---


## GrCheckboxes (Vue)

Props конфигурации компонента - `gr-checkboxes-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `values` * | Значения для чекбоксов | Массив из строчных элементов | - |
| `keys` | Ключи значений | Массив | - |
\* - обязательное поле

Кроме объекта конфигурации необходимо создать объект для получения отмеченных чекбоксов и передать его в `v-model`.

Если в конфигурации указаны ключи, то при выборе чекбоксов будут передаваться они, а не значения.

Пример подключения компонента:<br>
`GrCheckboxes#checkboxes(:gr-checkboxes-config="checkboxesConfig", v-model="chosenCheckboxes")`

---


## GrRadiobuttons (Vue)

Все настройки точно такие же, как и в `GrCheckboxes`.

Props конфигурации компонента - `gr-radiobuttons-config`.

---


## GrMenu (Vue)

Props конфигурации компонента - `gr-menu-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `items` | Элементы меню | Массив из объектов | - |

Пример элемента меню:
```
{
  link: {
    path: '/component',
    query: { name: 'menu', ind: '1' }
  },
  title: 'Главная'
}
```
- path - путь ссылки для пункта меню
- query - необязательный элемент, параметры для ссылки (пример: `/component?name=menu&ind=1`)
- title - текст, отображаемый в пунке меню

Пример подключения компонента:<br>
`GrMenu#menu(:gr-menu-config="menuConfig")`

---


## GrModal (Vue)

Props конфигурации компонента - `gr-modal-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `buttonTitle` | Текст кнопки для открытия окна | Строка | - |
| `title` | Заголовок окна | Строка | - |
| `text` | Текст окна | Строка | - |
| `confirmEnabled` | Доступна ли кнопка подтверждения в окне | true, false | false |
| `inputEnabled` | Доступно ли поле ввода в окне | true, false | false |

Для окон с подтверждением и полем ввода кроме объекта конфигурации необходимо создать объект для получения результата подтверждения или введенного значения и передать его в `v-model`.

Пример подключения компонента:<br>
`GrModal#modal-confirm(:gr-modal-config="modalConfirmConfig", v-model="modalConfirmed")`

---


## GrSelect (Vue)

Props конфигурации компонента - `gr-select-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `values` * | Значения элементов списка | Массив из строчных элементов | - |
| `keys` | Ключи элементов | Массив | - |
| `isMultiple` | Разрешено ли выбрать несколько элементов | true, false | false |
| `itemsMultiple` | Разрешено ли выбрать элемент несколько раз | true, false | false |
| `maxItemQuantity` | Максимальное количество для выбора одного элемента (работает только при `itemsMultiple: true`) | Целое число | - |
\* - обязательное поле

Кроме объекта конфигурации необходимо создать объект для получения выбранных элементов и передать его в `v-model`.

Если в конфигурации указаны ключи, то при выборе элементов будут передаваться они, а не значения.

Пример подключения компонента:<br>
`GrSelect#select-items-multiple(:gr-select-config="selectItemsMultipleConfig", v-model="selectItemsMultiple")`

---


## GrNotification (Vue)

Props конфигурации компонента - `gr-notification-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `type` * | Тип уведомления | 'info', 'success', 'error' | - |
| `title` * | Заголовок уведомления | Строка | - |
| `message` | Сообщение уведомления | Строка | - |
\* - обязательное поле

Для показа уведомления необходимо изменить стили этого компонента:
- display = block
- opacity = 1

Пример подключения компонента:<br>
`GrNotification#notification-success(:gr-notification-config="notificationSuccessConfig")`

---


## GrDrawer (Vue)

Props конфигурации компонента - `gr-drawer-config`.

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `title` | Заголовок панели | Строка | - |
| `items` | Элементы панели | Массив из объектов | - |

Поле `items` идентично соответствующему полю компонента `GrMenu`.

Пример подключения компонента:<br>
`GrDrawer#drawer(:gr-drawer-config="drawerConfig")`

---


## GrSlider (CSS + JS)

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `arrowsEnabled` | Показывать ли стрелки | true, false | - |
| `navigationEnabled` | Показывать ли навигационные элементы | true, false | - |

Пример разметки:
```
.gr-slider-wrapper#gr-slider-wrapper
  .gr-slider-container#gr-slider-container
    .gr-slider-item
      img(src="../assets/img/slider/dog.jpg", alt="Image")
    .gr-slider-item
      img(src="../assets/img/slider/parrot.jpg", alt="Image")
    .gr-slider-item
      img(src="../assets/img/slider/duck.jpg", alt="Image")
```

Элементы слайдера (все, что внутри `.gr-slider-item`) можно менять.

---


## GrTabs (CSS + JS)

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `layout` | Разметка (навигационные кнопки над контентом или слева) | 'horizontal', 'vertical' | 'horizontal' |

Пример разметки:
```
.gr-tabs#gr-tabs
  .gr-tabs-nav
    button.gr-tabs-nav__item Текст 1
    button.gr-tabs-nav__item Текст с картинкой
    button.gr-tabs-nav__item Текст 2
  .gr-tabs-content
    .gr-tabs-content__item
      p Lorem ipsum...
    .gr-tabs-content__item
      p Lorem ipsum ...
      img(src="...", alt="Image")
    .gr-tabs-content__item
      p Lorem ipsum...
```

Содержимое контента (все, что внутри `.gr-tabs-content__item`) можно менять.

---


## GrAccordion (CSS + JS)

| Параметр | Описание   | Допустимые значения | Значение по умолчанию |
| -----    | ---------- | ---------------     | --------------------  |
| `isMultiple` | Разрешено ли открыть более одной вкладки | true, false | true |
| `defaultOpened` | Открыты ли все вкладки по умолчанию | true, false | false |
| `defaultOpenedItems` | Какие вкладки по счету (начиная с 0) открыты по умолчанию | Массив целых чисел | - |

Пример разметки:
```
.gr-accordion#gr-accordion
  .gr-accordion-item
    button.gr-accordion-item__title Текст 1
    .gr-accordion-item__wrapper
      .gr-accordion-item__content
        p Lorem ipsum...
  .gr-accordion-item
    button.gr-accordion-item__title Текст с картинкой
    .gr-accordion-item__wrapper
      .gr-accordion-item__content
        p Lorem ipsum...
        img(src="...", alt="Image")
  .gr-accordion-item
    button.gr-accordion-item__title Текст 2
    .gr-accordion-item__wrapper
      .gr-accordion-item__content
        p Lorem ipsum...
```

Содержимое контента (все, что внутри `.gr-accordion-item__content`) можно менять.

---


## GrPreloader (CSS + JS)

При создании объекта класса компонента в конструктор ничего передавать не нужно.


Для показа прелоадера необходимо вызвать метод `showPreloader()` созданного объекта.<br>
Для того, чтобы скрыть прелоадер, необходимо вызвать метод `hidePreloader()` созданного объекта.


Пример разметки:
```
.gr-preloader#gr-preloader
```
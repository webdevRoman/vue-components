<template lang="pug">
.gr-calendar
  input.gr-calendar__input(type="text", readonly, v-model="inputDate", @click="toggleCalendar")
  .gr-calendar__popup
    .gr-calendar__header
      .gr-calendar-nav
        button.gr-calendar-nav__arrow.gr-calendar-nav__arrow_left(@click="changeMonth(-12)")
        .gr-calendar-nav__value {{ year }}
        button.gr-calendar-nav__arrow.gr-calendar-nav__arrow_right(@click="changeMonth(12)")
      .gr-calendar-nav
        button.gr-calendar-nav__arrow.gr-calendar-nav__arrow_left(@click="changeMonth(-1)")
        .gr-calendar-nav__value {{ month }}
        button.gr-calendar-nav__arrow.gr-calendar-nav__arrow_right(@click="changeMonth(1)")
    .gr-calendar-body
      .gr-calendar-body__row.gr-calendar-body__weekdays
        .gr-calendar-body__cell.gr-calendar__weekday(v-for="(weekday, i) in weekdaysDictionary", :class="{'gr-calendar__weekday_disabled': !!disabledWeekdaysInd.find(curVal => curVal === i)}") {{ weekday }}
      .gr-calendar-body__row(v-for="week in weeks")
        button.gr-calendar-body__cell.gr-calendar__date(v-for="date in week", :class="{'gr-calendar-body__cell_today': date.today, 'gr-calendar-body__cell_chosen': date.chosen}", :disabled="date.disabled", @click='chooseDate(date)') {{ date.text }}
</template>

<script>
export default {
  name: 'GrCalendar',
  props: ['grCalendarConfig'],
  data() {
    return {
      inputDate: '',
      separator: '.',
      year: '',
      month: '',
      date: new Date(),
      chosenDate: null,
      disabledWeekdaysInd: [],
      disabledDaysBefore: null,
      disabledDaysAfter: null,
      monthsDictionary: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      weekdaysDictionary: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      weeks: []
    }
  },
  methods: {
    formatDate(date) {
      let dateStr = ''
      if (date.getDate().toString().length === 1)
        dateStr += '0' + date.getDate().toString() + this.separator
      else
        dateStr += date.getDate().toString() + this.separator
      if ((date.getMonth() + 1).toString().length === 1)
        dateStr += '0' + (date.getMonth() + 1).toString() + this.separator
      else
        dateStr += (date.getMonth() + 1).toString() + this.separator
      dateStr += date.getFullYear()
      return dateStr
    },
    getDateFromStr(dateStr) {
      const dateArr = dateStr.split(this.separator)
      return new Date(dateArr[2], parseInt(dateArr[1]) - 1, parseInt(dateArr[0]))
    },
    getMonthWeeks(monthFirstDate) {
      const weeks = []
      const monthLastDate = new Date(monthFirstDate.getFullYear(), monthFirstDate.getMonth() + 1, 0)
      const decrementDaysNumber = monthFirstDate.getDay() === 0 ? 6 : monthFirstDate.getDay() - 1
      let startDate = new Date(monthFirstDate.getFullYear(), monthFirstDate.getMonth(), monthFirstDate.getDate() - decrementDaysNumber)
      startDate.setHours(0, 0, 0, 0)

      let weeksNumber = 1
      let nextMonday = monthFirstDate
      nextMonday.setDate(monthFirstDate.getDay() === 1 ? 8 : monthFirstDate.getDate() + (1 + 7 - monthFirstDate.getDay()) % 7)
      weeksNumber += Math.ceil((monthLastDate.getDate() - nextMonday.getDate() + 1) / 7)

      for (let i = 0; i < weeksNumber; i++) {
        weeks[i] = []
        for (let j = 0; j < 7; j++) {
          weeks[i][j] = {
            date: new Date(startDate),
            text: startDate.getDate(),
            today: (this.formatDate(startDate) === this.formatDate(new Date())) ? true : false,
            disabled: (
              startDate.getMonth() === this.date.getMonth() &&
              !this.disabledWeekdaysInd.find(curVal => curVal === j) &&
              (!this.disabledDaysBefore ? true : startDate >= this.disabledDaysBefore) &&
              (!this.disabledDaysAfter ? true : startDate <= this.disabledDaysAfter)
            ) ? false : true,
            chosen: (this.chosenDate !== null && this.formatDate(startDate) === this.formatDate(this.chosenDate)) ? true : false
          }
          startDate.setDate(startDate.getDate() + 1)
        }
      }
      return weeks
    },
    openCalendar() {
      const calendar = document.getElementById(this.$attrs.id).querySelector('.gr-calendar__popup')
      calendar.style.display = 'block'
      setTimeout(() => { calendar.classList.add('gr-calendar__popup_active') }, 50)
      const input = document.getElementById(this.$attrs.id)
      input.style.marginBottom = parseInt(input.style.marginBottom) + calendar.offsetHeight + 'px'
    },
    closeCalendar() {
      const calendar = document.getElementById(this.$attrs.id).querySelector('.gr-calendar__popup')
      const input = document.getElementById(this.$attrs.id)
      input.style.marginBottom = '0px'
      calendar.classList.remove('gr-calendar__popup_active')
      setTimeout(() => { calendar.style.display = 'none' }, 250)
    },
    toggleCalendar() {
      const calendar = document.getElementById(this.$attrs.id).querySelector('.gr-calendar__popup')
      if (calendar.classList.contains('gr-calendar__popup_active')) {
        this.closeCalendar()
      } else {
        this.openCalendar()
      }
    },
    chooseDate(date) {
      this.weeks.forEach(week => { week.forEach(day => { day.chosen = false }) })
      date.chosen = true
      this.chosenDate = date.date
      this.inputDate = this.formatDate(date.date)
      this.$emit('input', this.inputDate)
    },
    changeMonth(num) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + num, 1)
      this.year = this.date.getFullYear()
      this.month = this.monthsDictionary[this.date.getMonth()]
      this.weeks = this.getMonthWeeks(this.date)
    }
  },
  created() {
    // Config
    if (this.grCalendarConfig.monthsDictionary && this.grCalendarConfig.monthsDictionary.length === 12)
      this.monthsDictionary = this.grCalendarConfig.monthsDictionary
    if (this.grCalendarConfig.weekdaysDictionary && this.grCalendarConfig.weekdaysDictionary.length === 7)
      this.weekdaysDictionary = this.grCalendarConfig.weekdaysDictionary
    if (this.grCalendarConfig.separator && this.grCalendarConfig.separator.length !== 0)
      this.separator = this.grCalendarConfig.separator
    if (this.grCalendarConfig.disabledWeekdays && this.grCalendarConfig.disabledWeekdays.length > 0 && this.grCalendarConfig.disabledWeekdays.length <= 7)
      this.grCalendarConfig.disabledWeekdays.forEach(day => {
        const ind = this.weekdaysDictionary.findIndex(curDay => curDay === day)
        this.disabledWeekdaysInd.push(ind)
      })
    if (this.grCalendarConfig.disabledDaysBefore)
      if (this.grCalendarConfig.disabledDaysBefore === 'today') {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        this.disabledDaysBefore = today
      } else
        this.disabledDaysBefore = this.getDateFromStr(this.grCalendarConfig.disabledDaysBefore)
    if (this.grCalendarConfig.disabledDaysAfter)
      if (this.grCalendarConfig.disabledDaysAfter === 'today') {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        this.disabledDaysAfter = today
      } else
        this.disabledDaysAfter = this.getDateFromStr(this.grCalendarConfig.disabledDaysAfter)

    const date = new Date()
    this.inputDate = '**' + this.separator + '**' + this.separator + '****'
    this.year = date.getFullYear()
    this.month = this.monthsDictionary[date.getMonth()]
    this.date = date
    const monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1)
    this.weeks = this.getMonthWeeks(monthFirstDate)
  },
  mounted() {
    const calendar = document.getElementById(this.$attrs.id).querySelector('.gr-calendar__popup')
    calendar.style.display = 'none'
    const input = document.getElementById(this.$attrs.id)
    input.style.marginBottom = '0px'
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-calendar
    position: relative
    transition: .2s
    &__input
      display: block
      width: 150px
      border-bottom: 2px solid $cBgDark
      font-family: $font
      font-size: 24px
      text-align: center
      margin: 0 auto
      cursor: pointer
      transition: .2s
      @media screen and (max-width: $wL)
        width 120px
        font-size 20px
      @media screen and (max-width: $wS)
        width 100px
        font-size 18px
      &:hover
        border-bottom: 2px solid $cActive
        @media screen and (max-width: $wL)
          border-bottom: 2px solid $cBgDark
    &__popup
      position: absolute
      top: 150%
      left: 50%
      transform: translateX(-50%)
      background-color: $cBgLight
      box-shadow: 0 0 20px rgba(0, 0, 0, .3)
      opacity: 0
      z-index: 10
      transition: .2s
      &_active
        opacity: 1
    &-nav
      display: flex
      justify-content: space-between
      align-items: center
      padding: 5px
      &__arrow
        position: relative
        display: flex
        justify-content: center
        align-items: center
        width: 40px
        height: 40px
        border-radius: 50%
        transition: .2s
        @media screen and (max-width: $wL)
          width 30px
          height 30px
        &:after
          position: absolute
          top: 50%
          left: 50%
          content: ''
          display: block
          width: 50%
          height: 50%
          border-top: 2px solid $cBgDark
          border-left: 2px solid $cBgDark
        &_left
          &:after
            transform: translateX(-30%) translateY(-50%) rotate(-45deg)
        &_right
          &:after
            transform: translateX(-70%) translateY(-50%) rotate(135deg)
        &:hover
          background-color: rgba($cBgDark, .2)
          @media screen and (max-width: $wL)
            background-color: transparent
      &__value
        font-size: 24px
        @media screen and (max-width: $wL)
          font-size 20px
        @media screen and (max-width: $wS)
          font-size 18px
    &__header
      margin-bottom: 15px
      @media screen and (max-width: $wL)
        margin-bottom 5px
    &__weekday
      &_disabled
        opacity: .5
    &-body
      &__weekdays
        .gr-calendar-body__cell
          background-color: $cBgDark
          color: $cFontLight
          &:hover
            background-color: $cBgDark
      &__row
        display: flex
        justify-content: space-between
        align-items: center
      &__cell
        display: flex
        justify-content: center
        align-items: center
        width: 45px
        height: 30px
        font-family: $font
        transition: .2s
        @media screen and (max-width: $wL)
          width: 40px
          height: 25px
        &:hover
          background-color: rgba($cActive, .4)
          @media screen and (max-width: $wL)
            background-color: transparent
        &[disabled]
          cursor: default
          opacity: .5
          &:hover
            background-color: transparent
        &_today
          background-color: rgba($cActive, .2)
          &:hover
            @media screen and (max-width: $wL)
              background-color: rgba($cActive, .2)
        &_chosen
          background-color: $cActive
          color: $cBgLight
          &[disabled]
            &:hover
              background-color: $cActive
          &:hover
            background-color: $cActive
</style>
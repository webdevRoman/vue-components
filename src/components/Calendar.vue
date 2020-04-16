<template lang="pug">
.calendar
  input.calendar-input(type="text", readonly, v-model="inputDate")
  .calendar-popup
    .calendar__header
      .calendar-nav.calendar__year
        .calendar-nav__arrow.calendar-nav__arrow_left
        .calendar-nav__value {{ year }}
        .calendar-nav__arrow.calendar-nav__arrow_right
      .calendar-nav.calendar__month
        .calendar-nav__arrow.calendar-nav__arrow_left
        .calendar-nav__value {{ month }}
        .calendar-nav__arrow.calendar-nav__arrow_right
    .table.calendar__body
      .table__row.calendar__weekdays
        .table__cell.calendar__weekday(v-for="weekday in weekdaysDictionary") {{ weekday }}
      .table__row(v-for="week in weeks")
        .table__cell.calendar__date(v-for="date in week") {{ date }}
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      inputDate: '',
      separator: '.',
      year: '',
      month: '',
      date: '',       // ???
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
    setMonthWeeks(monthFirstDate) {
      const weeks = []
      const monthLastDate = new Date(monthFirstDate.getFullYear(), monthFirstDate.getMonth() + 1, 0)
      const decrementDaysNumber = monthFirstDate.getDay() === 0 ? 6 : monthFirstDate.getDay() - 1
      let startDate = new Date(monthFirstDate.getFullYear(), monthFirstDate.getMonth(), monthFirstDate.getDate() - decrementDaysNumber)
      
      let weeksNumber = 1
      let nextMonday = monthFirstDate
      nextMonday.setDate(monthFirstDate.getDay() === 1 ? 8 : monthFirstDate.getDate() + (1 + 7 - monthFirstDate.getDay()) % 7)
      weeksNumber += Math.ceil((monthLastDate.getDate() - nextMonday.getDate() + 1) / 7)

      for (let i = 0; i < weeksNumber; i++) {
        weeks[i] = []
        for (let j = 0; j < 7; j++) {
          weeks[i][j] = startDate.getDate()
          startDate.setDate(startDate.getDate() + 1)
        }
      }
      this.weeks = weeks
    }
  },
  computed: {

  },
  created() {
    const date = new Date()
    this.inputDate = this.formatDate(date)
    this.year = date.getFullYear()
    this.month = this.monthsDictionary[date.getMonth()]
    this.date = date.getDate()
    const monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1)
    this.setMonthWeeks(monthFirstDate)
  }
}
</script>

<style scoped lang="stylus">
.table__row
  display flex
  justify-content space-between
  align-items center
</style>
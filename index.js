// register the grid component
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
      data: Array,
      columns: Array    
    },
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    }
  })
  
  // bootstrap the demo
  var demo = new Vue({
    el: '#demo',
    data: {
      gridColumns: ['bookID', 'name', 'mileage', 'completed', 'date'],
      gridData: getHikes()
    }
  })

function getHikes() {
    return [
        { bookID: 1, name: "Ben Lomond", mileage: 16, completed: false, date: "", county: "Weber County" },
        { bookID: 2, name: "Ogden River Parkway", mileage: 3.4, completed: false, date: "", county: "Weber County" },
        { bookID: 3, name: "Mount Ogden", mileage: 3.1, completed: false, date: "", county: "Weber County" },
        { bookID: 4, name: "Malans Peak", mileage: 5, completed: true, date: "2017-08-23", county: "Weber County" },
        { bookID: 5, name: "Waterfall Canyon", mileage: 2.6, completed: true, date: "2017-08-23", county: "Weber County" },
        { bookID: 6, name: "Adams Canyon", mileage: 3.6, completed: true, date: "2016-05-09", county: "Davis County" },
        { bookID: 7, name: "Thurston Peak", mileage: 8.6, completed: false, date: "2017-07-18", county: "Davis County" },
        { bookID: 8, name: "Farmington Creek Trail", mileage: 3.2, completed: true, date: "2017-10-15", county: "Davis County" },
        { bookID: 9, name: "Frary Peak", mileage: 6.6, completed: true, date: "2015-07-15", county: "Davis County" },
        { bookID: 10, name: "Kenny Creek Trail", mileage: 4.5, completed: true, date: "2015-08-01", county: "Davis County" },
        { bookID: 11, name: "Mormon Pioneer Trail", mileage: 9.1, completed: false, date: "", county: "Salt Lake County" },
        { bookID: 12, name: "Emigration Canyon Ridgeline", mileage: 5.2, completed: true, date: "2014-07-22", county: "Salt Lake County" },
        { bookID: 13, name: "City Creek Canyon", mileage: 9, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 14, name: "Red Butte Garden", mileage: 2, completed: true, date: "2014-05-24", county: "Salt Lake County" },
        { bookID: 15, name: "The Living Room", mileage: 2.7, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 16, name: "Lambs Canyon", mileage: 4, completed: true, date: "2014-05-25", county: "Salt Lake County" },
        { bookID: 17, name: "Mount Aire", mileage: 3.8, completed: true, date: "2013-06-05", county: "Salt Lake County" },
        { bookID: 18, name: "Grandeur  (via Church Fork)", mileage: 5.4, completed: true, date: "2016-09-22", county: "Salt Lake County" },
        { bookID: 19, name: "Desolation Trail to Salt Lake Overlook", mileage: 4.8, completed: true, date: "2016-05-02", county: "Salt Lake County" },
        { bookID: 20, name: "Gobblers Knob (via Alexanders Basin)", mileage: 4.4, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 21, name: "Millcreek to Park City Overlook", mileage: 5.2, completed: true, date: "2016-09-15", county: "Salt Lake County" },
        { bookID: 22, name: "Neffs Canyon", mileage: 5.5, completed: true, date: "2013-03-13", county: "Salt Lake County" },
        { bookID: 23, name: "Mount Olympus", mileage: 7, completed: true, date: "2014-05-21", county: "Salt Lake County" },
        { bookID: 24, name: "Dog Lake", mileage: 4.6, completed: true, date: "2014-06-02", county: "Salt Lake County" },
        { bookID: 25, name: "Desolation Lake", mileage: 8.2, completed: true, date: "2017-07-08", county: "Salt Lake County" },
        { bookID: 26, name: "Mount Raymond (via Butler Fork)", mileage: 8, completed: false, date: "", county: "Salt Lake County" },
        { bookID: 27, name: "Donut Falls", mileage: 1.4, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 28, name: "Lake Blanche", mileage: 5.8, completed: true, date: "2014-06-09", county: "Salt Lake County" },
        { bookID: 29, name: "Broad Fork Twin Peaks", mileage: 9.8, completed: true, date: "2017-08-05", county: "Salt Lake County" },
        { bookID: 30, name: "Willow Heights", mileage: 2, completed: true, date: "2017-06-27", county: "Salt Lake County" },
        { bookID: 31, name: "Ferguson Canyon", mileage: 3.4, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 32, name: "Jordan River Parkway", mileage: 11, completed: false, date: "", county: "Salt Lake County" },
        { bookID: 33, name: "Great Western Trail (Gaurdsman Pass to Clayton Peak)", mileage: 2.2, completed: true, date: "2014-08-02", county: "Salt Lake County" },
        { bookID: 34, name: "Lake Solitude", mileage: 3.5, completed: true, date: "2016-09-28", county: "Salt Lake County" },
        { bookID: 35, name: "Brighton Lakes", mileage: 4.5, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 36, name: "Sunset Peak", mileage: 4.2, completed: true, date: "2017-07-14", county: "Salt Lake County" },
        { bookID: 37, name: "Cecret Lake", mileage: 1.6, completed: true, date: "", county: "Salt Lake County" },
        { bookID: 38, name: "White Pine Lake", mileage: 9.8, completed: true, date: "2015-07-25", county: "Salt Lake County" },
        { bookID: 39, name: "Pfeifferhorn (via Red Pine)", mileage: 10, completed: true, date: "2017-07-30", county: "Salt Lake County" },
        { bookID: 40, name: "American Fork Twin Peaks", mileage: 2.2, completed: false, date: "", county: "Salt Lake County" },
        { bookID: 41, name: "Bells Canyon", mileage: 5.6, completed: true, date: "2014-06-15", county: "Salt Lake County" },
        { bookID: 42, name: "Lone Peak", mileage: 12, completed: true, date: "2017-08-30", county: "Salt Lake County" },
        { bookID: 43, name: "Silver Lake", mileage: 4.4, completed: false, date: "", county: "Utah County" },
        { bookID: 44, name: "Box Elder Peak", mileage: 9.8, completed: true, date: "2017-09-16", county: "Utah County" },
        { bookID: 45, name: "Timpanogos Cave National Monument", mileage: 3, completed: false, date: "", county: "Utah County" },
        { bookID: 46, name: "Mount Timpagonos (via the Timpooneke Trail)", mileage: 14.8, completed: true, date: "2016-07-15", county: "Utah County" },
        { bookID: 47, name: "Emerald Lake & Mount Timpanogos (via Aspen Grove Trail)", mileage: 13.6, completed: false, date: "", county: "Utah County" },
        { bookID: 48, name: "Stewart Falls", mileage: 3.6, completed: true, date: "2016-05-22", county: "Utah County" },
        { bookID: 49, name: "Battle Creek Falls", mileage: 1.6, completed: true, date: "2017-06-20", county: "Utah County" },
        { bookID: 50, name: "Provo River Parkway", mileage: 15, completed: false, date: "", county: "Utah County" },
        { bookID: 51, name: "Big Springs Hollow", mileage: 5, completed: false, date: "", county: "Utah County" },
        { bookID: 52, name: "Buffalo Peak", mileage: 1, completed: false, date: "", county: "Utah County" },
        { bookID: 53, name: "Squaw Peak", mileage: 7, completed: false, date: "", county: "Utah County" },
        { bookID: 54, name: "Y Mountain", mileage: 2.4, completed: false, date: "", county: "Utah County" },
        { bookID: 55, name: "Stansbury Island Trail", mileage: 9.5, completed: true, date: "2016-02-28", county: "Tooele County" },
        { bookID: 56, name: "Deseret Peak", mileage: 8.5, completed: false, date: "", county: "Tooele County" },
        { bookID: 57, name: "Naturalist Basin", mileage: 12, completed: true, date: "2016-08-07", county: "Uintas/Summit County" },
        { bookID: 58, name: "Lofty Lake Loop", mileage: 4.1, completed: true, date: "2017-07-22", county: "Uintas/Summit County" },
        { bookID: 59, name: "Fehr Lake Trail", mileage: 3.4, completed: false, date: "", county: "Uintas/Summit County" },
        { bookID: 60, name: "Bald Mountain", mileage: 3, completed: true, date: "2016-08-06", county: "Uintas/Summit County" },
    ];
}

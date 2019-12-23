var defaultcity, getweather, gettemp, getwind, getpic, getdate, city, weather, temp, wind, date
Page
  ({
    data: { 
      select: false,
      grade_name: '--请选择--',
      grades: ['1档', '2档', '3档',],
      inputShowed: false,
      showDialog: false
      },
    bindShowMsg() {
      this.setData({
        select: !this.data.select
      })
    },
    onLoad: function (options) {

    },
    onReady: function () {

    },
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },


    onReachBottom: function () {

    },


    onShareAppMessage: function () {

    },
 
    mySelect(e) {
      console.log(e)
      var name = e.currentTarget.dataset.name
      this.setData({
        grade_name: name,
        select: false
      })
    },
    onLoad: function (e) {
      var that = this
      defaultcity = '北京'
      wx.request({
        url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=3uwuycGl1b2oDFMVFdFUGinzDuqZNKYP&location=' + defaultcity,
        success: function (res) {
          getweather = res.data.results[0].weather_data[0].weather
          gettemp = res.data.results[0].weather_data[0].temperature
          getwind = res.data.results[0].weather_data[0].wind
          getpic = res.data.results[0].weather_data[0].dayPictureUrl
          getdate=res.data.results[0].weather_data[0].date
          that.setData({
            city: defaultcity,
            weather: getweather,
            temp: gettemp,
            wind: getwind,
            pic: getpic,
            date:getdate,
          })
        } 
      })
      
      }
  })
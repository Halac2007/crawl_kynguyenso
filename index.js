import * as cheerio from 'cheerio'
import express from 'express'
import cors from 'cors'
import { got } from 'got'
import axios from 'axios'
const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  got('https://kynguyenso.plo.vn/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.rank-1', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('.story').find('a').attr('title')
        const link = $(this).find('.story').find('a').attr('href')
        const image = $(this).find('.story').find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')

        const time = $(this).find('.story').find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,
          image,
          time,
        })
      })
      res.json(articles)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/nhip-cong-nghe', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/nhip-cong-nghe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})
app.get('/thiet-bi-so', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/thiet-bi-so/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/tuyet-chieu', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/tuyet-chieu/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/kinh-doanh-online', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/kinhdoanhonline/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        // const imageTop = $(this).find('a').find('img').attr('src')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/cong-nghe-40', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/cong-nghe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/an-sach-song-khoe', async (req, res) => {
  got('https://plo.vn/an-sach-song-khoe/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)

      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')

        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const arrNew = articles.slice(4)

      const arrNewC = arrNew.splice(15, 23)

      const arrNewSpliceEnd = arrNew.splice(arrNewC)

      const arrEnd = arrNewSpliceEnd.splice(19)

      // const newarr = articles.splice(15, 27)
      res.json(arrNewSpliceEnd.splice(arrEnd))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/xe-va-luat', async (req, res) => {
  got('https://plo.vn/xe-va-luat/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      const arrNew = articles.slice(4)

      const arrNewC = arrNew.splice(15, 23)

      const arrNewSpliceEnd = arrNew.splice(arrNewC)

      const arrEnd = arrNewSpliceEnd.splice(19)

      // const newarr = articles.splice(15, 27)
      res.json(arrNewSpliceEnd.splice(arrEnd))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-------------phân trang-------------------------*/

app.get('/page/an-sach-song-khoe', async (req, res) => {
  got('https://plo.vn/an-sach-song-khoe/?trang=2')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      res.json(articles.slice(4))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*------------------*/

app.get('/page/xe-va-luat', async (req, res) => {
  got('https://plo.vn/xe-va-luat/?trang=2')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })

      res.json(articles.slice(4))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-----------phân trang page 1------------*/

app.get('/page/ky-nguyen-so', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/tuyet-chieu/')
    .then((response) => {
      const html = response.body
      const $ = cheerio.load(html)
      const articles = []
      $('.story', html).each(function () {
        // const title = $(this).text().trim()
        const title = $(this).find('a').attr('title')
        const link = $(this).find('a').attr('href')
        const image = $(this).find('a').find('img').attr('data-src') || $(this).find('a').find('img').attr('src')
        const time = $(this).find('.story__time').text().trim() || ' '
        articles.push({
          title,
          link,

          image,
          time,
        })
      })
      const newarr = articles.splice(1, 3)
      res.json(articles.slice(newarr))
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

/*-----------------gộp data------------------------*/

// app.get('/tong-hop', async (req, res) => {
//   const respRepos = await axios(`https://kynguyenso.herokuapp.com/nhip-cong-nghe`)
//   const res1 = await axios(`https://kynguyenso.herokuapp.com/cong-nghe-40`)
//   const res2 = await axios(`https://kynguyenso.herokuapp.com/tuyet-chieu`)
//   const res3 = await axios(`https://kynguyenso.herokuapp.com/thiet-bi-so`)
//   const res4 = await axios(`https://kynguyenso.herokuapp.com/kinh-doanh-online`)
//   const res5 = await axios(`https://kynguyenso.herokuapp.com/`)

//   const arr1 = respRepos.data
//   const arr2 = res1.data
//   const arr3 = res2.data
//   const arr4 = res3.data
//   const arr5 = res4.data
//   const arr = res5.data

//   const arrNews = [...arr, ...arr1, ...arr2, ...arr3, ...arr4, ...arr5]

//   res.send(arrNews)
// })

// /*-------------------------*/

// app.get('/ky-nguyen-so', async (req, res) => {
//   const respRepos = await axios(`https://kynguyenso.herokuapp.com/nhip-cong-nghe`)
//   const res1 = await axios(`https://kynguyenso.herokuapp.com/cong-nghe-40`)
//   const res2 = await axios(`https://kynguyenso.herokuapp.com/tuyet-chieu`)
//   const res3 = await axios(`https://kynguyenso.herokuapp.com/thiet-bi-so`)
//   const res4 = await axios(`https://kynguyenso.herokuapp.com/kinh-doanh-online`)

//   const arr1 = respRepos.data
//   const arr2 = res1.data
//   const arr3 = res2.data
//   const arr4 = res3.data
//   const arr5 = res4.data

//   const arrNews = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5]
//   res.send(arrNews)
// })

// app.get('/tin-noi-bat', async (req, res) => {
//   const respGlobal = await axios(`https://kynguyenso.herokuapp.com/`)
//   const respRepos = await axios(`https://kynguyenso.herokuapp.com/xe-va-luat`)
//   const arr1 = respGlobal.data
//   const arr2 = respRepos.data
//   const arr3 = [...arr1, ...arr2]

//   res.json(arr3)
// })

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server ${port}`)
})

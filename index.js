import * as cheerio from 'cheerio'
import express from 'express'
import cors from 'cors'
import { got } from 'got'

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/')
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
      res.json(articles)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

app.get('/nhip-cong-nghe', async (req, res) => {
  got('https://kynguyenso.plo.vn/ky-nguyen-so/nhip-cong-nghe')
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
      res.json(articles)
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
      res.json(articles)
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
      res.json(articles)
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
      res.json(articles)
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
      res.json(articles)
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
      res.json(articles)
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
      res.json(articles)
    })
    .catch((err) => {
      console.log('Error: ', err.message)
    })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`server ${port}`)
})

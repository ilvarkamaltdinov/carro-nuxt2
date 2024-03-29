import {findDomain} from '../app/variables'

export default function (req, res, next) {
  let data = "User-agent: *\n" +
    "Disallow: /";

  if (findDomain(req.headers.host).isIndex) {
    data = "User-agent: *\n" +
      "Disallow: /*thanks*\n" +
      "Disallow: /europe*\n" +
      "Disallow: /cars\n" +
      "Disallow: /undefined\n" +
      "Disallow: /new\n" +
      "Disallow: /archive\n" +
      "Disallow: /katalog-top\n" +
      "Disallow: /leasing\n" +
      "Disallow: /reviews\n" +
      "Disallow: /*?*\n" +
      "Allow: *.js\n" +
      "Allow: *.css\n" +
      "Allow: *.png\n" +
      "Allow: *.svg\n" +
      "Allow: *.jpg\n" +
      "Allow: *.jpeg\n" +
      "Allow: *.woff\n" +
      "Allow: *.ttf\n" +
      `Sitemap: https://${req.headers.host}/sitemap.xml`
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end(data);

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}

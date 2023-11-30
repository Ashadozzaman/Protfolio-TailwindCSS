# Tailwind CSS
#### Install process
```
npm install
#install tailwindcss
npm install tailwindcss
#install live server
npm install -g live-server
npx live-server

```
#### VS Extention: `Tailwind CSS IntelliSense`, `Live Server`
- Recommand css
- Show css in-line
- Show live css

1. `src/tailwind.css` it's default css file for this project.
2. `output/tailwind.css` here diplay all executed css.
3. Build both file in package.json

```
"scripts": {
    "build": "tailwindcss -i ./src/tailwind.css -o ./output/tailwind.css -w"
  },
```
- `-i` insert data coppy to `-o` output, `-w` live watch.

### Note: For run browser css project need to install `live sever` package.

## Utility First Approach

#### Tailwind: Tailwind work based on utility.
#### Boostrap: Boostrap also other css framework work based on component.

- There are different kinds of `utility` in one component.
- Using `utility classes` to build custom designs without writing `CSS`.
````
<div class="max-w-sm mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-2 sm:flex sm:items-center sm:max-w-md sm:py-4 sm:space-y-2 sm:space-x-6">
    <img class="h-28 mx-auto rounded-full ring-4 ring-green-500 sm:mx-0 sm:flex-shrink-0" src="/images/profile.png"
        alt="Profile Image">
    <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Ashadozzaman Shvou</p>
            <p class="text-gray-500 font-medium">shovoua@gmail.com </p>
            <p class="text-gray-500 font-medium">01762662771 </p>
        </div>
        <button
            class="px-4 py-1 p border border-purple-200 rounded-full text-sm text-purple-600 font-semibold">Profile
            View</button>
    </div>
</div>

````
#### In the example above, we’ve used:

- Tailwind’s `flexbox and padding` utilities `(flex, shrink-0, and p-6)` to control the overall card layout
- The `max-width and margin` utilities `(max-w-sm and mx-auto)` to constrain the card width and center it horizontally
- The `background color, border radius, and box-shadow` utilities `(bg-white, rounded-xl, and shadow-lg)` to style the card’s appearance
- The `width and height utilities` `(w-12 and h-12)` to size the logo image
- The `space-between utilities ``(space-x-4)` to handle the spacing between the logo and the text
- The `font size, text color, and font-weight `utilities `(text-xl, text-black, font-medium, etc.) `to style the card text

## Responsive Design
Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.
| Breakpoint prefix | Minimum width | CSS                                       |
|-------------------|---------------|-------------------------------------------|
| sm                | 640px         | @media (min-width: 640px) { ... }         |
| md                | 768px         | @media (min-width: 768px) { ... }         |
| lg                | 1024px        | @media (min-width: 1024px) { ... }        |
| xl                | 1280px        | @media (min-width: 1280px) { ... }        |
| 2xl               | 1536px        | @media (min-width: 1536px) { ... }        |

``````
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
``````

## Handling Hover, Focus, and Other States

## Dark Mode
`tailwind.config.js` under this file manage default dark mode.
- `darkmode:class` It's manage by system changes.
- `darkmode:media` It's manage by according to device.

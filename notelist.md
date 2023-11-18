# Tailwind CSS

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
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>

````
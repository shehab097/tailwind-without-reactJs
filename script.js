const code1 = `
<xmp>npm create vite@latest your-project-name --template vanilla
cd your-project-name
</xmp>
`;

document.getElementById("code1").innerHTML = code1;


const code2 = `
<xmp>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
</xmp>
`;
document.getElementById("code2").innerHTML = code2;

const code3 = `
<xmp>module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts}',  // Adjust this path if necessary
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
</xmp>
`;
document.getElementById("code3").innerHTML = code3;

const code4 = `
<xmp>@tailwind base;
@tailwind components;
@tailwind utilities;
</xmp>
`;
document.getElementById("code4").innerHTML = code4;

const code5 = `
<xmp><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanilla JS + Tailwind</title>
    <link rel="stylesheet" href="/src/style.css">
</head>

<body>
    <h1 class="text-3xl font-bold text-center mt-8">Hello Tailwind with Vite!</h1>
    <script type="module" src="/src/main.js"></script>
</body>

</html>
</xmp>
`;
document.getElementById("code5").innerHTML = code5;

const code7 = `
<xmp>npm run dev
</xmp>
`;
document.getElementById("code7").innerHTML = code7;


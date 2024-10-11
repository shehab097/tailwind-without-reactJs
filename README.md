##### If you're setting up Tailwind CSS with PostCSS and Vite for a vanilla HTML and JavaScript project (without React), follow these steps:

------------
### 1. Create a Vite Project:

##### You can create a Vite project for vanilla HTML/JavaScript like this:

<pre>
npm create vite@latest your-project-name --template vanilla
cd your-project-name
</pre>

### 2. Install Tailwind CSS and PostCSS:

##### Next, install `tailwindcss`, `postcss`, and `autoprefixer`:

<pre>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
</pre>

##### This will create both tailwind.config.js and postcss.config.js.

### 3. Configure `tailwind.config.js`:
##### Edit the tailwind.config.js file to include the paths to your HTML and JavaScript files:

<pre>
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts}',  // Adjust this path if necessary
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
</pre>

###4. Add Tailwind to Your CSS:

#####In your `src/style.css` (or create it if it does not exist), add the following Tailwind directives

<pre>
@tailwind base;
@tailwind components;
@tailwind utilities;
</pre>

###5. Set Up HTML and JS Files:

#####Ensure you have your `index.html` in the root or in the `public/ directory` if you're following Vite conventions. Your `index.html` might look like this:

<pre>
````html
<!DOCTYPE html>
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

````
</pre>
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#E8F2EF",  // Tom mais claro
          100: "#CDE3DB",
          200: "#A6CFC1",
          300: "#7FBBA7",
          400: "#5FA390", 
          500: "#578E7E",  // Cor base
          600: "#4B7F70",
          700: "#3D6A5D",
          800: "#2F554A",
          900: "#1F3A32",  // Tom mais escuro
          950: "#14251F",
        },
        neutral: {
          100: '#FFFAEC', // Fundo card
          200: "#F5ECD5", // Fundo claro
          500: "#cfcfcf", // Fundo claro
          900: "#3D3D3D", // Fundo escuro

        },
        success: "#A7E4B5",  // Verde sucesso (mais claro)
        warning: "#F9D455",  // Amarelo alerta (mais claro)
        error: "#F46969",    // Vermelho erro (mais claro)
        info: "#66A6FF",     // Azul informação (mais claro)
      }
    },
  },
  plugins: [],
}


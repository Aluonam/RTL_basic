**Pasos de ejecución:**
Para ejecutar una prueba, abriremos nuestra línea de comando, abriremos la terminal y ejecutaremos un comando.

Para ejecutar todas las pruebas.

El comando que vamos a ejecutar es NPM run test.

**Types of Queries**
1. Single Elements 
    - getBy... 
    - queryBy... 
    - findBy... 

2. Multiple Elements 
    - getAllBy...
    - queryAllBy...
    - findAllBy...

3. Consultas que reflejan la experiencia de los usuarios 
    - getByRole
    - getByLabelText
    - getByPlaceholderText
    - getByText
    - getByDisplayValue

4. Consultas semánticas
    - getByAltText
    - getByTitle


Queries:
    - getByRole: This can be used to query every element that is exposed in the accessibility tree. getByRole('button', {name: /submit/i}).
    
    - getByLabelText: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.
    
    - getByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.
    
    - getByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).
    
    - getByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.
    
    - getByAltText: If your element is one which supports alt text (img, area, input, and any custom element), then you can use this to find that element.
    
    - getByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users

Test IDs:
  - getByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).

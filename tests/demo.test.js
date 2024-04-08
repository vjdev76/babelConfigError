describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => {
    //1. Inicializar
    const message = 'Hola mundo';
    //2. Estimular
    const message2 = 'Hola mundo';
    //3. Observar comportamiento....esperado
    expect(message).toBe(message2);
  });
});

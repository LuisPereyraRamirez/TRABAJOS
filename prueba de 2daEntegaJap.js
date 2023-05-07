function obtenerStatus(nombre, apellido, departamento, puntajeFundamentos, puntajeImperativa, puntajeOOP, evidenciaFundamentos, evidenciaImperativa, evidenciaOOP, puntajeIngles, hizoLecciones) {
  // Calculamos el puntaje técnico
  var puntajeTecnico = (puntajeFundamentos * 0.3) + (puntajeImperativa * 0.5) + (puntajeOOP * 0.2);
  
  // Verificamos si se entregaron las 3 evidencias
  var entregas = 0;
  if (evidenciaFundamentos) {
    entregas++;
  }
  if (evidenciaImperativa) {
    entregas++;
  }
  if (evidenciaOOP) {
    entregas++;
  }
  
  // Verificamos si se cumplen los requisitos para aprobar fase 1
  var aprobadoIngles = puntajeIngles >= 50;
  var aprobadoLecciones = hizoLecciones;
  var aprobadoTecnico = false;
  var necesitaExamen = false;
  
  if (puntajeTecnico >= 60 && entregas === 3) {
    aprobadoTecnico = true;
  } else if (puntajeTecnico >= 60 && entregas < 3) {
    necesitaExamen = true;
  } else if (puntajeTecnico >= 50 && puntajeTecnico < 60 && entregas === 3) {
    necesitaExamen = true;
  }
  
  // Si se necesita examen, mostramos mensaje específico
  if (necesitaExamen) {
    return "Hola " + nombre + "!! El detalle de tu status final es:\n\n" +
           "En Inglés - " + puntajeIngles + " puntos - " + (aprobadoIngles ? "ok" : "no aprobado") + "\n\n" +
           "En CT - " + (hizoLecciones ? "100" : "0") + " puntos - " + (aprobadoLecciones ? "ok" : "no aprobado") + "\n\n" +
           "En Técnica - " + puntajeTecnico + " puntos - ok\n\n" +
           "Evidencias entregadas - " + entregas + " - ok\n\n" +
           "En conclusión, necesitas rendir el examen final con supervisión para aprobar fase 1.";
  }
  
  // Si no se cumple algún requisito, mostramos mensaje de reprobación
  if (!aprobadoIngles || !aprobadoLecciones || !aprobadoTecnico) {
    return "Hola " + nombre + "!! El detalle de tu status final es:\n\n" +
           "En Inglés - " + puntajeIngles + " puntos - " + (aprobadoIngles ? "ok" : "no aprobado") + "\n\n" +
           "En CT - " + (hizoLecciones ? "100" : "0") + " puntos - " + (aprobadoLecciones ? "ok" : "no aprobado") + "\n\n" +
           "En Técnica - "
  }
}

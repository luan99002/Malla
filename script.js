const requisitos = {
  comunicacion2: ["comunicacion1"],
  biomolecular: ["quimica", "biofisica", "biocelular"],
  sistemaexcretor: ["quimica", "biofisica", "biocelular"],
  bioquimica: ["quimica", "biocelular"],
  casos1: ["quimica", "biofisica", "biocelular"],
  aparatolocomotor: ["biofisica", "biocelular"],

  casos2: ["sistemaexcretor", "casos1"],
  filosofia: ["comunicacion1", "comunicacion2"],
  sistemareproductor: ["biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor"],
  sistemaendocrino: ["biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor"],
  sistemanervioso: ["biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor"],
  medsocial: ["introduccion", "comunicacion2"],
  recursos: ["metodologia", "comunicacion2"],

  sangre: ["casos2", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],
  casos3: ["casos2", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],
  sistemarespiratorio: ["casos2", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],
  sistemadigestivo: ["casos2", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],
  sistemacardiovascular: ["casos2", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],
  genetica: ["biocelular", "biomolecular", "sistemareproductor", "sistemaendocrino", "sistemanervioso"],

  patologia: ["sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica"],
  microbiologia: ["sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular"],
  epidemiologia: ["medsocial", "sangre"],
  farmacologia: ["sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular"],
  casos4: ["sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica"],

  semiologia: ["matematica", "quimica", "biofisica", "biocelular", "metodologia", "introduccion", "comunicacion1", "comunicacion2", "biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor", "casos2", "filosofia", "sistemareproductor", "sistemaendocrino", "sistemanervioso", "medsocial", "recursos", "sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica", "patologia", "microbiologia", "epidemiologia", "farmacologia", "casos4"],
  medpaciente1: ["matematica", "quimica", "biofisica", "biocelular", "metodologia", "introduccion", "comunicacion1", "comunicacion2", "biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor", "casos2", "filosofia", "sistemareproductor", "sistemaendocrino", "sistemanervioso", "medsocial", "recursos", "sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica", "patologia", "microbiologia", "epidemiologia", "farmacologia", "casos4"],
  diagnostico: ["matematica", "quimica", "biofisica", "biocelular", "metodologia", "introduccion", "comunicacion1", "comunicacion2", "biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor", "casos2", "filosofia", "sistemareproductor", "sistemaendocrino", "sistemanervioso", "medsocial", "recursos", "sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica", "patologia", "microbiologia", "epidemiologia", "farmacologia", "casos4"],
  informatica: ["matematica", "quimica", "biofisica", "biocelular", "metodologia", "introduccion", "comunicacion1", "comunicacion2", "biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor", "casos2", "filosofia", "sistemareproductor", "sistemaendocrino", "sistemanervioso", "medsocial", "recursos", "sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica", "patologia", "microbiologia", "epidemiologia", "farmacologia", "casos4"],
  fisiopatologia: ["matematica", "quimica", "biofisica", "biocelular", "metodologia", "introduccion", "comunicacion1", "comunicacion2", "biomolecular", "sistemaexcretor", "bioquimica", "casos1", "aparatolocomotor", "casos2", "filosofia", "sistemareproductor", "sistemaendocrino", "sistemanervioso", "medsocial", "recursos", "sangre", "casos3", "sistemarespiratorio", "sistemadigestivo", "sistemacardiovascular", "genetica", "patologia", "microbiologia", "epidemiologia", "farmacologia", "casos4"],

  medicina1: ["semiologia", "medpaciente1", "diagnostico", "fisiopatologia"],
  evidencias: ["semiologia", "medpaciente1", "diagnostico", "fisiopatologia"],
  medpaciente2: ["semiologia", "medpaciente1", "diagnostico", "fisiopatologia"],
  etica: ["informatica", "fisiopatologia"],

  medicina2: ["medicina1", "evidencias", "medpaciente2"],
  investigacion: ["informatica", "evidencias", "medpaciente2"],
  medpaciente3: ["medicina1", "evidencias", "medpaciente2"],
  psicologia: ["medicina1", "evidencias", "medpaciente2", "etica"],

  cirugia1: ["medicina2", "medpaciente3", "psicologia"],
  proyectoinv: ["investigacion"],
  modulo: ["medicina2", "medpaciente3", "psicologia"],
  electivo1: ["medicina2", "medpaciente3", "psicologia"],

  cirugia2: ["cirugia1", "modulo", "electivo1"],
  psiquiatria: ["cirugia1", "modulo", "electivo1"],
  tesis1: ["proyectoinv"],
  redaccion: ["proyectoinv"],

  ginecologia: ["cirugia2", "psiquiatria"],
  electivo2: ["cirugia2", "psiquiatria"],
  saludglobal: ["cirugia2", "psiquiatria"],
  medlegal: ["cirugia2", "psiquiatria"],

  pediatria: ["ginecologia", "medlegal"],
  tesis2: ["tesis1"],
  gerencia: ["ginecologia", "saludglobal", "medlegal"],
  taller: ["ginecologia", "electivo2", "saludglobal", "medlegal"],

  internadomed: ["pediatria", "tesis2", "gerencia", "taller"],
  internadoped: ["pediatria", "tesis2", "gerencia", "taller"],
  internadogineco: ["pediatria", "tesis2", "gerencia", "taller"],
  internadocirugia: ["pediatria", "tesis2", "gerencia", "taller"]
};

// Mismo motor de interacción
document.querySelectorAll('.curso input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const cursoId = this.closest('.curso').dataset.id;

    if (this.checked) {
      this.closest('.curso').classList.add('completado');
    } else {
      this.closest('.curso').classList.remove('completado');
    }

    saveProgress();
    desbloquearCursosDependientes(cursoId);
  });
});

function desbloquearCursosDependientes(cursoAprobado) {
  for (const [curso, prereqs] of Object.entries(requisitos)) {
    if (prereqs.includes(cursoAprobado)) {
      const todosAprobados = prereqs.every(prereq => {
        const checkbox = document.querySelector(`.curso[data-id="${prereq}"] input[type="checkbox"]`);
        return checkbox && checkbox.checked;
      });

      if (todosAprobados) {
        const cursoDiv = document.querySelector(`.curso[data-id="${curso}"]`);
        if (cursoDiv) {
          cursoDiv.classList.remove('bloqueado');
          const input = cursoDiv.querySelector('input[type="checkbox"]');
          input.disabled = false;
        }
      }
    }
  }
}

function saveProgress() {
  const progreso = {};
  document.querySelectorAll('.curso').forEach(curso => {
    const id = curso.dataset.id;
    const checked = curso.querySelector('input[type="checkbox"]').checked;
    progreso[id] = checked;
  });
  localStorage.setItem('mallaProgresoMedicina', JSON.stringify(progreso));
}

function loadProgress() {
  const progreso = JSON.parse(localStorage.getItem('mallaProgresoMedicina')) || {};
  for (const [id, checked] of Object.entries(progreso)) {
    const cursoDiv = document.querySelector(`.curso[data-id="${id}"]`);
    if (cursoDiv) {
      const input = cursoDiv.querySelector('input[type="checkbox"]');
      input.checked = checked;
      if (checked) cursoDiv.classList.add('completado');
    }
  }
  for (const id of Object.keys(progreso)) {
    if (progreso[id]) desbloquearCursosDependientes(id);
  }
}

loadProgress();

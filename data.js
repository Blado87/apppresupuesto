const presupuesto = {
  moneda: "COP",

  meses: [
    {
      mes: "Enero",
      movimientos: [
        {
          tipo: "ingreso",
          categoria: "Salario",
          emoji: "💼",
          monto: "$2.500.000",
          fecha: "01/01/2026"
        },
        {
          tipo: "gasto",
          categoria: "Alimento",
          emoji: "🍔",
          monto: "$45.000",
          fecha: "02/01/2026"
        },
        {
          tipo: "gasto",
          categoria: "Transporte",
          emoji: "🚌",
          monto: "$12.000",
          fecha: "03/01/2026"
        },
        {
          tipo: "gasto",
          categoria: "Servicios",
          emoji: "💡",
          monto: "$180.000",
          fecha: "05/01/2026"
        },
        {
          tipo: "ingreso",
          categoria: "Freelance",
          emoji: "💻",
          monto: "$300.000",
          fecha: "10/01/2026"
        }
      ]
    },

    {
      mes: "Febrero",
      movimientos: [
        {
          tipo: "ingreso",
          categoria: "Salario",
          emoji: "💼",
          monto: "$2.500.000",
          fecha: "01/02/2026"
        },
        {
          tipo: "gasto",
          categoria: "Arriendo",
          emoji: "🏠",
          monto: "$900.000",
          fecha: "01/02/2026"
        },
        {
          tipo: "gasto",
          categoria: "Alimento",
          emoji: "🍕",
          monto: "$60.000",
          fecha: "04/02/2026"
        },
        {
          tipo: "gasto",
          categoria: "Entretenimiento",
          emoji: "🎮",
          monto: "$80.000",
          fecha: "08/02/2026"
        },
        {
          tipo: "ingreso",
          categoria: "Ventas",
          emoji: "🛒",
          monto: "$200.000",
          fecha: "15/02/2026"
        }
      ]
    },

    {
      mes: "Marzo",
      movimientos: [
        {
          tipo: "ingreso",
          categoria: "Salario",
          emoji: "💼",
          monto: "$2.500.000",
          fecha: "01/03/2026"
        },
        {
          tipo: "gasto",
          categoria: "Salud",
          emoji: "🩺",
          monto: "$70.000",
          fecha: "03/03/2026"
        },
        {
          tipo: "gasto",
          categoria: "Estudio",
          emoji: "📚",
          monto: "$120.000",
          fecha: "06/03/2026"
        },
        {
          tipo: "gasto",
          categoria: "Transporte",
          emoji: "🚕",
          monto: "$15.000",
          fecha: "07/03/2026"
        },
        {
          tipo: "ingreso",
          categoria: "Freelance",
          emoji: "💻",
          monto: "$400.000",
          fecha: "18/03/2026"
        }
      ]
    }
  ],

  metasAhorro: [
    {
      proposito: "Viaje a Cartagena ✈️",
      meta: "$2.000.000",
      avance: "$800.000",
      abonos: [
        {
          monto: "$200.000",
          fecha: "15/01/2026"
        },
        {
          monto: "$300.000",
          fecha: "10/02/2026"
        },
        {
          monto: "$300.000",
          fecha: "20/03/2026"
        }
      ]
    },
    {
      proposito: "Fondo de emergencia 🚨",
      meta: "$5.000.000",
      avance: "$1.500.000",
      abonos: [
        {
          monto: "$500.000",
          fecha: "05/01/2026"
        },
        {
          monto: "$500.000",
          fecha: "05/02/2026"
        },
        {
          monto: "$500.000",
          fecha: "05/03/2026"
        }
      ]
    },
    {
      proposito: "Nuevo portátil 💻",
      meta: "$3.500.000",
      avance: "$1.200.000",
      abonos: [
        {
          monto: "$400.000",
          fecha: "12/01/2026"
        },
        {
          monto: "$400.000",
          fecha: "12/02/2026"
        },
        {
          monto: "$400.000",
          fecha: "12/03/2026"
        }
      ]
    }
  ]
};

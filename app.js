new Vue({
  el: '#app',
  created() {
    this.selected = this.meds.filter(m => m.selected);
  },
  methods: {
    select(med) {
      med.selected = !med.selected
      if (med.selected) this.selected.push(med);
      this.selected = this.selected.filter(m => m.selected)
    },
    score() {
      let scores = [0, 1, 2, 3, 4, 5, 6].map(i => {
        return this.selected.map(
          m => m.score[i]
        ).reduce((a, t) => a + t)
      });
      return scores;
    },
    total() {
      return this.selected.length && this.score().reduce((a, t) => a + t)
    }
  },
  data: {
    selected: [],
    teneds: [
      'DNA Alter-ations',
      'Mitoch-ondrial Failure',
      'Aging Pathways',
      'Quality Control',
      'Immune Sytem Failure',
      'Individual Cell Needs',
      'Waste Manage-ment'
    ],
    meds: [{
        name: 'Alpha Lipoic Acid',
        score: [2, 3, 1, 0, 2, 2, 1],
        pros: `Strong Anti-oxidant ROS.
        Recycles other anti-oxidants.
        Mitochondrial Energy.
        AMP Kinase.
        Anti-inflammatory.
        Epigenetic modifier.
        DNA repair.
        Indirectly lenghtens Telomeres.
        Appetite suppressing.
        Lowers blood glucose. Diabetes medication.
        Improved memory.
        Retina & Optic nerve regenearation.
        Increase bone density.
        Reduces liver fat.
        Reduces high blood pressure.`,
        cons: 'may cause low blood sugar: headache, hunger, weakness, sweating, confusion, irritability, dizziness, fast heart rate, or feeling jittery',
        dose: '300-600 mg/day (diabetic treatment 600 to 1,800 mg/day) Do not take with food'
      },
      {
        name: 'Apigenin',
        score: [2, 1, 0, 1, 2, 0, 0],
        pros: 'Epigenetic modifier. Increases NAD. DNA repair. Anti-inflammatory. Increase skin thickness and smoothness. Improve tissue repair.',
        cons: 'high dose induces sleepiness',
        dose: '50 mg/day'
      },
      {
        name: 'Astaxanthin',
        score: [0, 3, 0, 0, 2, 0, 0],
        pros: `Anti-oxidant, Free Radical Scavenger.
        Anti-inflammatory. Anti-infection.
        Skin, fitness, body fat, cancer, eyesight benefits.`,
        cons: 'may include increased bowel movements and red stool color',
        dose: '2 to 12 mg (4-6 maintenance, athletes 12 mg) Take with food',
        selected: true
      },
      {
        name: 'Astragalus',
        score: [3, 0, 0, 0, 2, 1, 0],
        pros: `Activate telomerase, slow telomere loss extends telomores significantly.
        Neuron growth and repair.
        Liver protection, anti-inflammatory, antioxidant, lowers blood sugar`,
        cons: 'diarrhea and other mild gastrointestinal effects. May may affect blood sugar and pressure',
        dose: 'TA-65: 100 to 250 units/day Cycloastrogenol 5 to 25 mg/day Astragaloside IV 50mg/day'
      },
      {
        name: 'Carnosine',
        score: [0, 3, 0, 0, 0, 0, 3],
        pros: `Anti-oxidant ROS.
        Anti-glycation.
        Improves athletic performance, depression, vision, skin, healing.
        Rejuvenates senescent cells.
        Reduces Telomere shortening.
        AGE reduction.
        Helps against diabetes, neurodegenerative diseases, diseases of the sense organs and cancers.`,
        cons: 'May cause prickly sensation in the skin mostly in face, head, arms, hands.',
        dose: '500 mg 2 times/day (Can’t take at one time.. get skin paresthesias)',
        selected: true
      },
      {
        name: 'Curcumin',
        score: [2, 3, 1, 0, 3, 0, 3],
        pros: 'Anti-oxidant. ROS. Anti-inflammatory. AMP Kinase, Many medical uses. Antimicrobial. Mitochondrial Energy',
        cons: 'huge quantities may result in diarrhea, a headache, a rash, or yellow stool.',
        dose: 'Dose depends on particular formulation',
        selected: true
      },
      {
        name: 'EGCG',
        score: [2, 2, 1, 2, 1, 1, 2],
        pros: `Antioxidant, anti-inflammatory and anti-tumorigenic effects.
        Epigenetic modifier.
        Activates AMP Kinase.
        Promotes autophagy.
        Bone generation.
        AGE reduction.
        Improves brain function.
        Helpful with cardiovascular diseases, neurodegenerative diseases, cancer, inflammatory diseases, metabolic diseases, obesity and AGING`,
        cons: 'high doses may cause mild nausea & heartburn',
        dose: '400-500 mg/day one cup green tea = 50 mg Take without food'
      },
      {
        name: 'Melatonin',
        score: [2, 2, 1, 2, 2, 2, 0],
        pros: `antioxidant ROS, cell protector. Epigenetic Modifier. Regulates circadian entrainment, blood pressure regulation, seasonal reproduction, ovarian physiology, immune function, body weight, autophagy, bone formation, stem cell differentiation`,
        cons: 'May cause headache, short-term feelings of depression, daytime sleepiness, dizziness, stomach cramps, and irritability',
        dose: '3 to 10 mg/ QD Take at night'
      },
      {
        name: 'Metformin',
        score: [3, 1, 3, 2, 2, 2, 3],
        pros: `Diabetic medication, lowers blood glucose.
        Anti-inflammatory.
        Activates AMP Kinase, endogenous anti-oxidants.
        DNA protection.
        Prevents new fat formation.
        Boosts formation of new nerve cells.
        Protects from cancer and cardiovascular disease.`,
        cons: 'May cause GI upset.',
        dose: '500 to 2,000 mg/ day'
      },
      {
        name: 'Nicotinamide Riboside',
        score: [0, 3, 3, 3, 0, 0, 0],
        pros: 'Mitochondria Energy. Sirtuin Co-Factor. DNA Repair. Preserve Hearing. Partial reversal of skeletal muscle aging.',
        cons: 'May cause nausea, fatigue, headaches, diarrhea, stomach discomfort and indigestion',
        dose: '250 to 500 mg /day',
        selected: true
      },
      {
        name: 'Pyridoxamine Vitamin B6',
        score: [0, 0, 0, 0, 0, 0, 3],
        pros: `AGE inhibition.
        Reduce kidney damage, retinal damage, AGE accumulation in the skin of diabetic animals.
        `,
        cons: 'May cause nausea, vomiting, diarrhea, stomach pain, loss of appetite, headache, tingling, sleepiness',
        dose: '50 to 250 mg/day'
      },
      {
        name: 'Quercetin',
        score: [0, 3, 1, 2, 2, 2, 0],
        pros: `Anti-inflammatory (strong), anti-infectious, antioxidant,
        anticancer/chemopreventive, neuroprotective, antihypertensive
        and glucose lowering properties. Activates AMP Kinase & Proteasome. Potentially kills scenescent cells.`,
        cons: `May cause headache (oral use)
        numbness and tingling (oral use)
        shortness of breath (intravenous use)
        nausea and vomiting (intravenous use)
        kidney damage (intravenous use greater than 945 mg/m2)`,
        dose: '500 to 1,000 mg/day'
      },
      {
        name: 'Resveratrol',
        score: [2, 3, 3, 3, 2, 2, 1],
        pros: `Activates Telomerase. Antioxidant ROS.
         Increase activity of catalase, superoxide dismutase, gluathione peroxidase, and glutathione S-transferase.
         Activates SIRT, AMP Kinase, DNA Repair, stem cells, osteoblasts. Anti-inflammatory.
         Blood Glucose reduction. cardiovascular, neurologic, ovary, fat loss, eyesight, anti-cancer and dental benefits.`,
        cons: 'May interact with blood thinners like warfarin (Coumadin), and NSAID medications like aspirin and ibuprofen',
        dose: '100-250 mg/day up to 500 mg to 1 gm/day',
        selected: true
      },
      {
        name: 'Pterostilbene',
        score: [2, 3, 3, 3, 2, 2, 1],
        pros: `Similar to Reservatol but stronger anti-fungal and skin UV protection.
        Anti-inflammatory properties weaker than Reservatol`,
        cons: 'High doses may cause high cholesterol',
        dose: '50 to 150 mg 2 times/day Take with food'
      },
      {
        name: 'Sulforaphane',
        score: [3, 2, 0, 1, 0, 2, 0],
        pros: `Reduces / prevents cancer, retinal disease, skin damage.
        Epigenetic modifier.
        Activates anti-oxidants, strongest NRF2 activator.
        Modulates mitochondria and stem cell health.`,
        cons: 'May increase gas, constipation, and diarrhea. Cytotoxic in high doses.',
        dose: 'Dose depends on particular formulation'
      },

    ]
  }
})
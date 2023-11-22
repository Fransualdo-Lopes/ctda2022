const sr = ScrollReveal({
  origin: "top",
  distance: "-80px",
  duration: 2000,
  reset: false,
});

const sr2 = ScrollReveal({
  origin: "right",
  duration: 3000,
  reset: false,
  distance: "50%",
});

sr2.reveal(
  `
    #linha-002,
    #spring2,
    #spring3
    `
);

const sr3 = ScrollReveal({
  origin: "left",
  duration: 3000,
  reset: false,
  distance: "50%",
});

sr3.reveal(
  `
    #springL1,
    #springL2,
    #springL3
    `
);

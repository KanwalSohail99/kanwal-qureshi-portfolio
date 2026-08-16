export type Education = {
  field: string;
  detail: string;
  /** Owner action: add institution name and dates here when confirmed.
   *  These fields are optional and are only rendered when present —
   *  no placeholder text ever reaches the page. */
  institution?: string;
  period?: string;
};

export const education: Education[] = [
  {
    field: "Biochemistry",
    detail:
      "Academic training in biochemistry, applied through a clinical laboratory internship at Civil Hospital Karachi and three years of professional laboratory practice.",
  },
];

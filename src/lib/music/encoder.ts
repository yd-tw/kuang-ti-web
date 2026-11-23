export const convertSolfegeToNote = (solfegeNote: string): string => {
  const solfegeMap: Record<string, string> = {
    do: "C",
    re: "D",
    mi: "E",
    fa: "F",
    sol: "G",
    la: "A",
    ti: "B",
    rest: "rest",
  };

  const match = solfegeNote.match(/([a-z]+)(\d)/i);
  if (!match) return solfegeNote;

  const [, name, octave] = match;
  const pitch = solfegeMap[name.toLowerCase()];
  return pitch ? `${pitch}${octave}` : solfegeNote;
};

export function convertNoteToSolfege(note: string): string {
  const noteMap: Record<string, string> = {
    C: "Do",
    D: "Re",
    E: "Mi",
    F: "Fa",
    G: "Sol",
    A: "La",
    B: "Ti",
  };

  const match = note.match(/^([A-G])(#?)(\d)$/);
  if (!match) return note;

  const [, pitch, sharp, octave] = match;
  const solfege = noteMap[pitch];

  return `${solfege}${sharp === "#" ? "♯" : ""}${octave}`;
}

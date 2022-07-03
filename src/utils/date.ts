export const getAgeByDate = (date: string): number => {
  const currentDate = new Date();
  const age = Math.floor(
    ((currentDate as any) - new Date(date).getTime()) / 3.15576e10
  );
  return age;
};

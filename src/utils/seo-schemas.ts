export const formatDateISO = (dateString: string): string => {
  // Convert "15 Jan 2025" to ISO format
  const months: { [key: string]: string } = {
    'Jan': '01', 'Fév': '02', 'Mar': '03', 'Avr': '04',
    'Mai': '05', 'Juin': '06', 'Juil': '07', 'Août': '08',
    'Sep': '09', 'Oct': '10', 'Nov': '11', 'Déc': '12'
  };
  
  const parts = dateString.split(' ');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = months[parts[1]] || '01';
    const year = parts[2];
    return `${year}-${month}-${day}T10:00:00+01:00`;
  }
  
  return new Date().toISOString();
};

export const generateArticleBreadcrumbs = (articleTitle: string, articleUrl: string) => [
  { name: 'Accueil', url: '/' },
  { name: 'Actualités', url: '/actualites' },
  { name: articleTitle, url: articleUrl }
];

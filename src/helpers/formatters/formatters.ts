export function userInitials(userName: string) {
  const fullName = userName
    .replace(/[^A-Za-z\s\u00c0-\u00ff]/g, '')
    .split(' ')
    .filter(Boolean);
  const firstInitials = (fullName[0] && fullName[0][0]) || '';
  const lastInitials = fullName.length > 1 ? fullName[fullName.length - 1][0].trim() : '';
  const initials = firstInitials + lastInitials;
  return initials ? initials.toUpperCase() : '';
}

export function formatUserFirstName(userName: string) {
  const fullName = userName
    .trim()
    .replace(/[^A-Za-z\s\u00c0-\u00ff]/g, '')
    .split(' ');
  const firstName = fullName[0] ?? '';
  return firstName;
}

export function formatCpf(userDocument: string) {
  const formatted = userDocument.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  return formatted.length !== 14 ? '000.000.000-00' : formatted;
}

export function formatCnpj(userDocument: string) {
  const formatted = userDocument.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
  return formatted.length !== 18 ? '00.000.000/0000-00' : formatted;
}

export function formatAmountInFull(n: number) {
  if (!n || typeof n !== 'number') {
    return 'R$ 0';
  }

  if (n >= 2000000000) {
    return `R$ ${(n / 1000000000).toLocaleString('pt-br', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    })} bilhões`;
  }

  if (n >= 1000000000) {
    return `R$ ${(n / 1000000000).toLocaleString('pt-br', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    })} bilhão`;
  }

  if (n >= 2000000) {
    return `R$ ${(n / 1000000).toLocaleString('pt-br', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    })} milhões`;
  }

  if (n >= 1000000) {
    return `R$ ${(n / 1000000).toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 1 })} milhão`;
  }

  if (n >= 1000) {
    return `R$ ${(n / 1000).toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 1 })} mil`;
  }

  return `R$ ${n}`;
}

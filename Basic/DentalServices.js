let dentalServices = ''

switch(dentalServices){
    case 'ARC':
      console.log('Regular Check up - Every 6 months')
      break;
    case 'AP':
      console.log('Adult Prophy - Every 6 months')
      break;
    case 'PM':
      console.log('Prior Maintenance - Every 6 months (After Deep Cleaning)')
      break;
    case 'SCRP':
      console.log('Deep Cleaning - Every 2 years')
      break;
    case 'FMX':
      console.log('Full Mouth X-rays - Every 3 years')
      break;
    case 'EXT':
      console.log('Extraction')
      break;
    case 'RTC':
      console.log('Root Canal')
      break;
    case 'RESTO':
      console.log('Filling - Every 2 years for the same tooth')
      break;
    case 'RCE':
      console.log('Child Check UP - Every 6 months including cleaning for patients who is under 14 years old.')
      break;
    case 'LTD':
      console.log('Limited Exam - Focus on the problem area')
      break;
    case 'EMR':
      console.log('Emergency')
      break;
    case 'CRN':
      console.log('CROWN - Medicaid never paid for this service')
      break;
    default:
      console.log('Welcome to Green Seattle Dental!')
      break;
      
}

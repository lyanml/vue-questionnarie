import singleSelectDefaultStatus from './singleSelect'
import multiSelectDefaultStatus from './multiSelect'
import optionSelectDefaultStatus from './optionSelect'
import singlePicSelectDefaultStatus from './singlePicSelect'
import multiPicSelectDefaultStatus from './multiPicSelect'
import textInputDefaultStatus from './textInput'
import rateScoreDefaultStatus from './RateScore'
import dateTimeDefaultStatus from './DateTime'

export const defaultStatusMap = {
  'single-select': singleSelectDefaultStatus,
  'multi-select': multiSelectDefaultStatus,
  'option-select': optionSelectDefaultStatus,
  'single-pic-select': singlePicSelectDefaultStatus,
  'multi-pic-select': multiPicSelectDefaultStatus,
  'text-input': textInputDefaultStatus,
  'rate-score': rateScoreDefaultStatus,
  'date-time': dateTimeDefaultStatus,
  'personal-info-name': textInputDefaultStatus,
  'personal-info-id': textInputDefaultStatus,
  'personal-info-tel': textInputDefaultStatus,
  'personal-info-wechat': textInputDefaultStatus,
  'personal-info-qq': textInputDefaultStatus,
  'personal-info-email': textInputDefaultStatus,
  'personal-info-address': textInputDefaultStatus,
  'personal-info-gender': singleSelectDefaultStatus,
  'personal-info-age': singleSelectDefaultStatus,
  'personal-info-education': singleSelectDefaultStatus,
  'personal-info-career': singleSelectDefaultStatus,
  'personal-info-birth': dateTimeDefaultStatus,
  'personal-info-collage': textInputDefaultStatus,
  'personal-info-major': textInputDefaultStatus,
  'personal-info-industry': textInputDefaultStatus,
  'personal-info-company': textInputDefaultStatus,
  'personal-info-position': textInputDefaultStatus,
}

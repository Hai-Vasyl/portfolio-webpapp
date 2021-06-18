import bcrypt from "bcryptjs"

interface IMsg {
  msg?: string
}
interface IMin extends IMsg {
  min: number
}
interface IMax extends IMsg {
  max: number
}
interface IIfexists {
  key: string
  value: string
  Modal: any
  msg: string
  isTrue?: boolean
}
interface ILength {
  params: any
  min?: number
  max?: number
  isMin?: boolean
}

export class Validation {
  value: string
  msg: string
  constructor(value: string) {
    this.value = value
    this.msg = ""
  }
  makeMsg(msg: string) {
    this.msg += ` ${msg}`
    this.msg = this.msg.trim()
  }
  isEmpty(args?: IMsg) {
    if (!this.value.trim()) {
      this.makeMsg((args && args.msg) || "This field cannot be empty!")
    }
    return this
  }
  isEmail(args?: IMsg) {
    const patern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!this.value.match(patern)) {
      this.makeMsg((args && args.msg) || "Email is not correct!")
    }
    return this
  }
  isMin(args?: IMin) {
    if (this.value.length < args.min) {
      this.makeMsg(
        (args && args.msg) ||
          `This field must be longer than ${args.min} characters!`
      )
    }
    return this
  }
  isMax(args?: IMax) {
    if (this.value.length > args.max) {
      this.makeMsg(
        (args && args.msg) ||
          `This field must be less than ${args.max} characters!`
      )
    }
    return this
  }
}

export const checkIsEmpty = (params: { [key: string]: string }) => {
  let isError = false
  const validated = {}
  Object.keys(params).forEach((key) => {
    validated[key] = new Validation(params[key]).isEmpty()
    if (validated[key].msg.length && !isError) {
      isError = true
    }
  })
  if (isError) {
    throw new Error(JSON.stringify(validated))
  }
  return validated
}

export const checkIsEmail = (param: any) => {
  let _param
  if (param.email instanceof Validation) {
    _param = param.email.isEmail()
  } else {
    _param = new Validation(param.email).isEmail()
  }
  if (_param.msg.length) {
    throw new Error(JSON.stringify({ email: _param }))
  }
  return _param
}

export const checkLength = ({ params, min, max }: ILength) => {
  let isError = false
  const validated = {}
  Object.keys(params).forEach((key) => {
    if (params[key] instanceof Validation) {
      if (min && max) {
        validated[key] = params[key].isMin({ min }).isMax({ max })
      } else if (min) {
        validated[key] = params[key].isMin({ min })
      } else if (max) {
        validated[key] = params[key].isMax({ max })
      }
    } else {
      validated[key] = new Validation(params[key])
      if (min && max) {
        validated[key] = validated[key].isMin({ min }).isMax({ max })
      } else if (min) {
        validated[key] = validated[key].isMin({ min })
      } else if (max) {
        validated[key] = validated[key].isMax({ max })
      }
    }
    if (validated[key].msg.length && !isError) {
      isError = true
    }
  })
  if (isError) {
    throw new Error(JSON.stringify(validated))
  }
  return validated
}

export const checkIfExists = async ({
  key,
  value,
  Modal,
  msg,
  isTrue,
}: IIfexists) => {
  const record: any = await Modal.findOne({ [key]: value })
  if (record && isTrue && Object.keys(record).length) {
    throw new Error(JSON.stringify({ [key]: { msg, value } }))
  }
  return record
}

export const comparePasswords = ({ password, hPass }) => {
  const isValidPassword = bcrypt.compareSync(password, hPass)
  if (!isValidPassword) {
    throw new Error(
      JSON.stringify({
        password: {
          msg: "Password is wrong, try another one!",
          value: password,
        },
      })
    )
  }
}

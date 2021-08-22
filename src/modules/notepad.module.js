import { Module } from '../core/module'
import { qel, cel, setStyle } from '../utils'

export class NotepadModule extends Module {
  constructor(type, text) {
    super(type, text)

    this.num = 'note-72'

    this.sop = {
        b: '1px solid #ccc',
        c: '1px solid #ff0000'
    }

    this.styles = {
        div: {
            display: 'inline-block',
            border: this.sop.b,
            borderRadius: '5px',
            marginBottom: '10px',
            marginRight: '10px',
            background: 'rgba(255,255,255,0.8)'
        },
        tarea: {
            width: '230px',
            minWidth: '160px',
            outline: 'none',
            height: '230px',
            margin: '8px',
            padding: '5px',
            boxSizing: 'border-box',
            border: this.sop.b,
            borderRadius: '4px'
        },
        top: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '10px',
            boxSizing: 'border-box'
        },
        h3: {
            color: '#333',
            fontWeight: 'bold'
        },
        closeBtn: {
            width: '14px',
            height: '14px',
            color: '#fff',
            background: '#fff',
            border: this.sop.c,
            background: '#ff0000',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 'bold',
            padding: '2px',
            lineHight: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        footerBtn: {
            border: this.sop.b,
            borderRadius: '3px',
            padding: '3px',
            textAlign: 'center',
            color: '#333',
            cursor: 'pointer'
        },
        noteList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '10px',
            boxSizing: 'border-box'
        },
        p: {
            background: '#dce',
            borderRadius: '3px',
            padding: '3px',
            textAlign: 'left',
            width: '100%',
            marginBottom: '5px'
        }
    }
  }
  trigger() {
      this.#create(qel('body'))
  }

  #create(point){
      if(qel('#ntp')) return
    console.log('NotepadModule')
    const div = cel('div')
    div.id = 'ntp'
    setStyle(div, this.styles.div)

    const top = cel('div')
    setStyle(top, this.styles.top)

    const h3 = cel('h3')
    setStyle(h3, this.styles.h3)
    h3.textContent = 'Блокнот'

    const closeBtn = cel('button')
    setStyle(closeBtn, this.styles.closeBtn)
    closeBtn.textContent = 'X'
    closeBtn.addEventListener('click', () => {this.#close(div)})
    
    const tarea = cel('textarea')
    tarea.id = 'tarea'
    setStyle(tarea, this.styles.tarea)

    const footer = cel('div')
    setStyle(footer, this.styles.top)

    const openBtn = cel('button')
    setStyle(openBtn, this.styles.footerBtn)
    openBtn.textContent = 'Открыть'
    openBtn.addEventListener('click', this.#open.bind(this, div))

    const saveBtn = cel('button')
    setStyle(saveBtn, this.styles.footerBtn)
    saveBtn.textContent = 'Сохранить'
    saveBtn.addEventListener('click', this.#save.bind(this, tarea))

    footer.append(openBtn, saveBtn)
    top.append(h3, closeBtn)
    div.append(top, tarea, footer)
    point.append(div)
  }

  #close(el){
      el.innerHTML = ''
      el.remove()
  }

  #save(tarea){
      const note = tarea.value
      let txt
      if(note.trim()){
        if(localStorage.getItem(this.num)){                 
            txt = localStorage.getItem(this.num)+'@@'+note
            console.log(localStorage.getItem(this.num)); 
        }else{
          txt = note
          console.log(localStorage.getItem(this.num)); 
        }
        
        localStorage.setItem(this.num, txt)
      }
           
      qel('#tarea').value = ''
      qel('#tarea').focus()
      console.log('rtyu');
  }

  #open(p){
      if(qel('#nls')) return
      const noteList = cel('div')
      
        setStyle(noteList, this.styles.noteList)
      if(localStorage.getItem(this.num)){
        const notes = localStorage.getItem(this.num).split('@@') 
        noteList.id = 'nls'
        noteList.textContent = ''
        if(notes.length > 0){
          notes.forEach(n => {
              const p = cel('div')
              setStyle(p, this.styles.p)
              p.textContent = n
              noteList.append(p)
          })
        }else{
          noteList.textContent = 'Записей нет'
        }
        const listFooter = cel('div')
      setStyle(listFooter, this.styles.top)

      const closeListBtn = cel('bottom')
      setStyle(closeListBtn, this.styles.footerBtn)
      closeListBtn.style.fontSize = '11px'
      closeListBtn.textContent = 'Закрыть список'
      closeListBtn.addEventListener('click', this.#close.bind(this, noteList))

      const clearListBtn = cel('bottom')
      setStyle(clearListBtn, this.styles.footerBtn)
      clearListBtn.style.fontSize = '11px'
      clearListBtn.textContent = 'Очистить список'
      clearListBtn.addEventListener('click', () => {
          localStorage.clear()
          this.#close(noteList)
      })

      listFooter.append(closeListBtn, clearListBtn)
      noteList.append(listFooter)
      p.append(noteList)
      }else{
        alert('Записей пока нет')
      }
          
  }
  
}

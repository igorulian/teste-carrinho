
import menos10 from './abaixo-10-reais.json'
import mais10 from './acima-10-reais.json'
import { IItem } from './type'

function getRandom() {
    const qual = localStorage.getItem('qual')
    if(qual === 'maior'){
        localStorage.setItem('qual', 'menor')
        return true
    }else{
        localStorage.setItem('qual', 'maior')
        return false
    }


}

export function getRandomData(){
    const dataMenor:IItem[] = menos10.items
    const dataMaior:IItem[] = mais10.items
    return getRandom() ? dataMenor : dataMaior
}


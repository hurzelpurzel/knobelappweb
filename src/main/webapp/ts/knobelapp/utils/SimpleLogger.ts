/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class SimpleLogger {
    static log(message: string) {
        if (typeof window.console !== 'undefined') {
            window.console.log(message);
        }
    }
    
   
}

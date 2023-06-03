import PySimpleGUI as sg
import server.hide as enc
import server.data as dec

sg.theme('#DarkTeal4')
right_click_menu = ['', ['Copy', 'Paste', 'Select All', 'Cut']]
MLINE_KEY = '-MLINE-'
layout = [[sg.Radio('Encrypt', "RADIO2", default=True, key='enc')],
          [sg.Radio('Decrypt', "RADIO2", default=False, key='dec')],
          [sg.Text('Whats ur text?'), sg.InputText(enable_events=True,
                                                     key='b')],
          [sg.Multiline(size=(40, 40), key='a',
                        right_click_menu=right_click_menu)],
          [sg.Button('Close')]]
window = sg.Window('Project', layout)
mline: sg.Multiline = window['a']
# Create the Window
# Event Loop to process "events" and get the "values" of the inputs
while True:
    event, values = window.read(timeout=10)
    if event == sg.WIN_CLOSED or event == 'Close':  # if user closes window or clicks cancel
        break
    elif values["enc"] == True:
        if event == "b":
            window['a'].update(enc.hide_msg(window['b'].get()))
    elif values["dec"] == True:
        window['a'].update(dec.extract_msg(window['b'].get()))
    if event == 'Select All':
        mline.Widget.selection_clear()
        mline.Widget.tag_add('sel', '1.0', 'end')
    elif event == 'Copy':
        try:
            text = mline.Widget.selection_get()
            window.TKroot.clipboard_clear()
            window.TKroot.clipboard_append(text)
        except:
            print('Nothing selected')
    elif event == 'Paste':
        mline.Widget.insert(sg.tk.INSERT, window.TKroot.clipboard_get())
    elif event == 'Cut':
        try:
            text = mline.Widget.selection_get()
            window.TKroot.clipboard_clear()
            window.TKroot.clipboard_append(text)
            mline.update('')
        except:
            print('Nothing selected')
window.close()

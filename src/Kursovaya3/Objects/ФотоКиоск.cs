﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Главное меню.
    /// </summary>
    // *** Start programmer edit section *** (ФотоКиоск CustomAttributes)

    // *** End programmer edit section *** (ФотоКиоск CustomAttributes)
    [AutoAltered()]
    [Caption("Главное меню")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГлавноеМенюE", new string[0])]
    [View("ГлавноеМенюL", new string[0])]
    [View("ФотоКиоскE", new string[0])]
    [View("ФотоКиоскL", new string[0])]
    public class ФотоКиоск : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fНаименование;
        
        private string fАдрес;
        
        private IIS.Kursovaya3.НастройКиоска fНастройКиоска;
        
        private IIS.Kursovaya3.ПечатьФото fПечатьФото;
        
        // *** Start programmer edit section *** (ФотоКиоск CustomMembers)

        // *** End programmer edit section *** (ФотоКиоск CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (ФотоКиоск.ID CustomAttributes)

        // *** End programmer edit section *** (ФотоКиоск.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (ФотоКиоск.ID Get start)

                // *** End programmer edit section *** (ФотоКиоск.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (ФотоКиоск.ID Get end)

                // *** End programmer edit section *** (ФотоКиоск.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФотоКиоск.ID Set start)

                // *** End programmer edit section *** (ФотоКиоск.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (ФотоКиоск.ID Set end)

                // *** End programmer edit section *** (ФотоКиоск.ID Set end)
            }
        }
        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (ФотоКиоск.Адрес CustomAttributes)

        // *** End programmer edit section *** (ФотоКиоск.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (ФотоКиоск.Адрес Get start)

                // *** End programmer edit section *** (ФотоКиоск.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (ФотоКиоск.Адрес Get end)

                // *** End programmer edit section *** (ФотоКиоск.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФотоКиоск.Адрес Set start)

                // *** End programmer edit section *** (ФотоКиоск.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (ФотоКиоск.Адрес Set end)

                // *** End programmer edit section *** (ФотоКиоск.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ФотоКиоск.Наименование CustomAttributes)

        // *** End programmer edit section *** (ФотоКиоск.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ФотоКиоск.Наименование Get start)

                // *** End programmer edit section *** (ФотоКиоск.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ФотоКиоск.Наименование Get end)

                // *** End programmer edit section *** (ФотоКиоск.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФотоКиоск.Наименование Set start)

                // *** End programmer edit section *** (ФотоКиоск.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ФотоКиоск.Наименование Set end)

                // *** End programmer edit section *** (ФотоКиоск.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Главное меню.
        /// </summary>
        // *** Start programmer edit section *** (ФотоКиоск.НастройКиоска CustomAttributes)

        // *** End programmer edit section *** (ФотоКиоск.НастройКиоска CustomAttributes)
        [PropertyStorage(new string[] {
                "НастройКиоска"})]
        [NotNull()]
        public virtual IIS.Kursovaya3.НастройКиоска НастройКиоска
        {
            get
            {
                // *** Start programmer edit section *** (ФотоКиоск.НастройКиоска Get start)

                // *** End programmer edit section *** (ФотоКиоск.НастройКиоска Get start)
                IIS.Kursovaya3.НастройКиоска result = this.fНастройКиоска;
                // *** Start programmer edit section *** (ФотоКиоск.НастройКиоска Get end)

                // *** End programmer edit section *** (ФотоКиоск.НастройКиоска Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФотоКиоск.НастройКиоска Set start)

                // *** End programmer edit section *** (ФотоКиоск.НастройКиоска Set start)
                this.fНастройКиоска = value;
                // *** Start programmer edit section *** (ФотоКиоск.НастройКиоска Set end)

                // *** End programmer edit section *** (ФотоКиоск.НастройКиоска Set end)
            }
        }
        
        /// <summary>
        /// Главное меню.
        /// </summary>
        // *** Start programmer edit section *** (ФотоКиоск.ПечатьФото CustomAttributes)

        // *** End programmer edit section *** (ФотоКиоск.ПечатьФото CustomAttributes)
        [PropertyStorage(new string[] {
                "ПечатьФото"})]
        [NotNull()]
        public virtual IIS.Kursovaya3.ПечатьФото ПечатьФото
        {
            get
            {
                // *** Start programmer edit section *** (ФотоКиоск.ПечатьФото Get start)

                // *** End programmer edit section *** (ФотоКиоск.ПечатьФото Get start)
                IIS.Kursovaya3.ПечатьФото result = this.fПечатьФото;
                // *** Start programmer edit section *** (ФотоКиоск.ПечатьФото Get end)

                // *** End programmer edit section *** (ФотоКиоск.ПечатьФото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФотоКиоск.ПечатьФото Set start)

                // *** End programmer edit section *** (ФотоКиоск.ПечатьФото Set start)
                this.fПечатьФото = value;
                // *** Start programmer edit section *** (ФотоКиоск.ПечатьФото Set end)

                // *** End programmer edit section *** (ФотоКиоск.ПечатьФото Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГлавноеМенюE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГлавноеМенюE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГлавноеМенюE", typeof(IIS.Kursovaya3.ФотоКиоск));
                }
            }
            
            /// <summary>
            /// "ГлавноеМенюL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГлавноеМенюL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГлавноеМенюL", typeof(IIS.Kursovaya3.ФотоКиоск));
                }
            }
            
            /// <summary>
            /// "ФотоКиоскE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФотоКиоскE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФотоКиоскE", typeof(IIS.Kursovaya3.ФотоКиоск));
                }
            }
            
            /// <summary>
            /// "ФотоКиоскL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФотоКиоскL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФотоКиоскL", typeof(IIS.Kursovaya3.ФотоКиоск));
                }
            }
        }
    }
}
